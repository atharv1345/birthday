const DOTS = Array.from({ length: 28 }, (_, i) => ({
  id: i,
  left: `${(i * 37) % 100}%`,
  top: `${(i * 53) % 100}%`,
  delay: `${(i % 7) * 0.4}s`,
  duration: `${4 + (i % 5)}s`,
}))

export function Particles() {
  return (
    <div className="particles">
      {DOTS.map((d) => (
        <span
          key={d.id}
          className="particle"
          style={{
            left: d.left,
            top: d.top,
            animationDelay: d.delay,
            animationDuration: d.duration,
          }}
        />
      ))}
    </div>
  )
}
