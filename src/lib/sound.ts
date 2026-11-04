import { publicAsset } from "./publicAsset"

let audioContext: AudioContext | null = null
let audioBuffer: AudioBuffer | null = null
let isFetching = false
let lastPlayTime = 0

// Get or initialize AudioContext
function getAudioContext(): AudioContext | null {
  if (typeof window === "undefined") return null
  if (!audioContext) {
    const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext
    if (AudioCtx) {
      audioContext = new AudioCtx()
    }
  }
  return audioContext
}

// Preload the sound buffer in background
export async function preloadClickSound(): Promise<void> {
  if (typeof window === "undefined" || audioBuffer || isFetching) return

  const ctx = getAudioContext()
  if (!ctx) return

  isFetching = true
  try {
    const soundUrl = publicAsset("sounds/click.mp3")
    const response = await fetch(soundUrl)
    if (!response.ok) throw new Error(`HTTP ${response.status}`)
    const arrayBuffer = await response.arrayBuffer()
    audioBuffer = await ctx.decodeAudioData(arrayBuffer)
  } catch (err) {
    // Silently handle if audio loading fails
  } finally {
    isFetching = false
  }
}

// Play click sound with zero latency and concurrent instances
export function playClickSound(volume = 0.7): void {
  if (typeof window === "undefined") return

  // Deduplicate rapid duplicate calls within 25ms
  const now = performance.now()
  if (now - lastPlayTime < 25) return
  lastPlayTime = now

  const ctx = getAudioContext()

  if (ctx && audioBuffer) {
    try {
      if (ctx.state === "suspended") {
        ctx.resume().catch(() => {})
      }
      const source = ctx.createBufferSource()
      const gainNode = ctx.createGain()
      gainNode.gain.value = Math.max(0, Math.min(1, volume))

      source.buffer = audioBuffer
      source.connect(gainNode)
      gainNode.connect(ctx.destination)
      source.start(0)
      return
    } catch {
      // Fallback below
    }
  }

  // Fallback if buffer not yet decoded or Web Audio unavailable
  try {
    const audio = new Audio(publicAsset("sounds/click.mp3"))
    audio.volume = Math.max(0, Math.min(1, volume))
    audio.play().catch(() => {})
  } catch {
    // Ignore autoplay restriction or failure
  }

  // Attempt to preload buffer for subsequent clicks if not loaded
  if (!audioBuffer && !isFetching) {
    preloadClickSound()
  }
}

// Global click event listener to capture all clicks and CTAs across the entire website
export function initClickSoundListener(): () => void {
  if (typeof window === "undefined") return () => {}

  // Preload sound immediately
  preloadClickSound()

  // Unlock AudioContext on first user interaction
  const unlockAudio = () => {
    const ctx = getAudioContext()
    if (ctx && ctx.state === "suspended") {
      ctx.resume().catch(() => {})
    }
  }

  const handleClick = (e: MouseEvent) => {
    unlockAudio()
    playClickSound()
  }

  // Capture phase listener ensures clicks on all buttons, links, and CTAs are captured
  window.addEventListener("click", handleClick, { capture: true, passive: true })
  window.addEventListener("pointerdown", unlockAudio, { passive: true, once: true })
  window.addEventListener("keydown", unlockAudio, { passive: true, once: true })

  return () => {
    window.removeEventListener("click", handleClick, { capture: true })
    window.removeEventListener("pointerdown", unlockAudio)
    window.removeEventListener("keydown", unlockAudio)
  }
}

