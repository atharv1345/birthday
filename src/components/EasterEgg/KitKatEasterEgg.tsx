import './KitKatEasterEgg.css'

interface Props {
  open: boolean
  onClose: () => void
}

export function KitKatEasterEgg({ open, onClose }: Props) {
  if (!open) return null

  return (
    <div className="kitkat-overlay" role="dialog" aria-modal="true" aria-labelledby="kitkat-title">
      <div className="kitkat-modal">
        <div className="kitkat-illus" aria-hidden="true">
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </div>
        <h2 id="kitkat-title">You deserve a break, Topper. 🍫😂</h2>
        <p>Four fingers of happiness — just for you.</p>
        <button type="button" className="glass-btn kitkat-close" onClick={onClose}>
          Close
        </button>
      </div>
      <button type="button" className="kitkat-scrim" aria-label="Close popup" onClick={onClose} />
    </div>
  )
}
