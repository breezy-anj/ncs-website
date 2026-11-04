import { publicAsset } from "./publicAsset"

let audioContext: AudioContext | null = null
let audioBuffer: AudioBuffer | null = null
let isFetching = false
let lastPlayTime = 0

let scrollAudioBuffer: AudioBuffer | null = null
let isFetchingScroll = false
let lastScrollPlayTime = 0

let cardFlipAudioBuffer: AudioBuffer | null = null
let isFetchingCardFlip = false
let lastCardFlipPlayTime = 0

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

// Preload the scroll tick sound buffer in background
export async function preloadScrollSound(): Promise<void> {
  if (typeof window === "undefined" || scrollAudioBuffer || isFetchingScroll) return

  const ctx = getAudioContext()
  if (!ctx) return

  isFetchingScroll = true
  try {
    const soundUrl = publicAsset("sounds/scroll.mp3")
    const response = await fetch(soundUrl)
    if (!response.ok) throw new Error(`HTTP ${response.status}`)
    const arrayBuffer = await response.arrayBuffer()
    scrollAudioBuffer = await ctx.decodeAudioData(arrayBuffer)
  } catch (err) {
    // Silently handle if audio loading fails
  } finally {
    isFetchingScroll = false
  }
}

// Preload the card flip sound buffer in background
export async function preloadCardFlipSound(): Promise<void> {
  if (typeof window === "undefined" || cardFlipAudioBuffer || isFetchingCardFlip) return

  const ctx = getAudioContext()
  if (!ctx) return

  isFetchingCardFlip = true
  try {
    const soundUrl = publicAsset("sounds/card-flip.mp3")
    const response = await fetch(soundUrl)
    if (!response.ok) throw new Error(`HTTP ${response.status}`)
    const arrayBuffer = await response.arrayBuffer()
    cardFlipAudioBuffer = await ctx.decodeAudioData(arrayBuffer)
  } catch (err) {
    // Silently handle if audio loading fails
  } finally {
    isFetchingCardFlip = false
  }
}

// Play scroll sound with micro-pitch modulation and ultra-low latency
export function playScrollSound(volume = 0.5): void {
  if (typeof window === "undefined") return

  // Deduplicate rapid scroll calls within 28ms to prevent distortion
  const now = performance.now()
  if (now - lastScrollPlayTime < 28) return
  lastScrollPlayTime = now

  const ctx = getAudioContext()

  if (ctx) {
    try {
      if (ctx.state === "suspended") {
        ctx.resume().catch(() => {})
      }

      if (scrollAudioBuffer) {
        const source = ctx.createBufferSource()
        const gainNode = ctx.createGain()
        gainNode.gain.value = Math.max(0, Math.min(1, volume))

        // Subtle micro-pitch variation (0.97 to 1.03) for natural tactile feel
        source.playbackRate.value = 0.97 + Math.random() * 0.06

        source.buffer = scrollAudioBuffer
        source.connect(gainNode)
        gainNode.connect(ctx.destination)
        source.start(0)
        return
      } else {
        // Instant synthetic Web Audio fallback if buffer is still fetching
        const osc = ctx.createOscillator()
        const gainNode = ctx.createGain()
        const t = ctx.currentTime
        osc.frequency.setValueAtTime(2200 + Math.random() * 200, t)
        osc.frequency.exponentialRampToValueAtTime(320, t + 0.02)
        gainNode.gain.setValueAtTime(volume * 0.35, t)
        gainNode.gain.exponentialRampToValueAtTime(0.001, t + 0.022)
        osc.connect(gainNode)
        gainNode.connect(ctx.destination)
        osc.start(t)
        osc.stop(t + 0.025)
        return
      }
    } catch {
      // Fallback below
    }
  }

  // HTML5 Audio fallback
  try {
    const audio = new Audio(publicAsset("sounds/scroll.mp3"))
    audio.volume = Math.max(0, Math.min(1, volume))
    audio.play().catch(() => {})
  } catch {}

  if (!scrollAudioBuffer && !isFetchingScroll) {
    preloadScrollSound()
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

// Play card flip sound with zero latency
export function playCardFlipSound(volume = 0.85): void {
  if (typeof window === "undefined") return

  const now = performance.now()
  if (now - lastCardFlipPlayTime < 25) return
  lastCardFlipPlayTime = now

  const ctx = getAudioContext()

  if (ctx) {
    try {
      if (ctx.state === "suspended") {
        ctx.resume().catch(() => {})
      }

      if (cardFlipAudioBuffer) {
        const source = ctx.createBufferSource()
        const gainNode = ctx.createGain()
        gainNode.gain.value = Math.max(0, Math.min(1, volume))

        source.buffer = cardFlipAudioBuffer
        source.connect(gainNode)
        gainNode.connect(ctx.destination)
        source.start(0)
        return
      }
    } catch {
      // Fallback below
    }
  }

  // HTML5 Audio fallback
  try {
    const audio = new Audio(publicAsset("sounds/card-flip.mp3"))
    audio.volume = Math.max(0, Math.min(1, volume))
    audio.play().catch(() => {})
  } catch {}

  if (!cardFlipAudioBuffer && !isFetchingCardFlip) {
    preloadCardFlipSound()
  }
}

// Global click event listener to capture all clicks and CTAs across the entire website
export function initClickSoundListener(): () => void {
  if (typeof window === "undefined") return () => {}

  // Preload sounds immediately
  preloadClickSound()
  preloadScrollSound()

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

