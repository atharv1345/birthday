const PETALS = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  left: `${8 + ((i * 17) % 84)}%`,
  delay: `${i * 1.1}s`,
  duration: `${10 + (i % 5)}s`,
  size: 10 + (i % 6),
}))

export function Petals() {
  return (
    <div className="petals">
      {PETALS.map((p) => (
        <span
          key={p.id}
          className="petal"
          style={{
            left: p.left,
            top: '-5%',
            width: p.size,
            height: p.size * 1.4,
            animationDelay: p.delay,
            animationDuration: p.duration,
          }}
        />
      ))}
    </div>
  )
}
