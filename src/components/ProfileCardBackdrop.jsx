export default function ProfileCardBackdrop({ color = "#ffc931", word = "" }) {
  const getFontSize = (w) => {
    if (w.length >= 9) return "text-[32px] tracking-tight"
    if (w.length >= 7) return "text-[40px] tracking-[0.01em]"
    return "text-[46px] tracking-[0.02em]"
  }

  const rows = Array(10).fill(word)

  return (
    <div
      className="absolute inset-x-0 top-0 h-[385px] overflow-hidden select-none pointer-events-none rounded-t-[300px]"
      style={{ backgroundColor: color }}
    >
      {word && (
        <div
          className={`absolute inset-0 flex flex-col items-center justify-start pt-[6px] gap-[8px] font-['Inter','Satoshi',sans-serif] font-bold uppercase text-black/[0.055] select-none pointer-events-none leading-none ${getFontSize(
            word
          )}`}
          aria-hidden="true"
        >
          {rows.map((w, i) => (
            <span key={i} className="whitespace-nowrap shrink-0">
              {w}
            </span>
          ))}
        </div>
      )}
      {/* Smooth transition from the colorful backdrop into the solid black card body */}
      <div className="absolute inset-x-0 bottom-0 h-[120px] bg-gradient-to-b from-transparent via-black/60 to-black pointer-events-none" />
    </div>
  )
}
