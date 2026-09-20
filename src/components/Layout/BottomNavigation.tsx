import { TOTAL_CHAPTERS } from '../../data/chapters'
import './BottomNavigation.css'

interface Props {
  current: number
  canPrev: boolean
  canNext: boolean
  isFullscreen: boolean
  onPrev: () => void
  onNext: () => void
  onGoTo: (id: number) => void
  onFullscreen: () => void
}

export function BottomNavigation({
  current,
  canPrev,
  canNext,
  isFullscreen,
  onPrev,
  onNext,
  onGoTo,
  onFullscreen,
}: Props) {
  const label = `${String(current).padStart(2, '0')} / ${String(TOTAL_CHAPTERS).padStart(2, '0')}`

  return (
    <div className="bottom-chrome">
      <p className="bottom-quote">
        “A little book about the little things that make you, you.”
      </p>

      <nav className="bottom-nav" aria-label="Page controls">
        <button
          type="button"
          className="glass-btn nav-pill"
          onClick={onPrev}
          disabled={!canPrev}
          aria-label="Previous page"
        >
          ← Previous Page
        </button>

        <div className="page-indicator" aria-live="polite">
          <span className="page-count">{label}</span>
          <div className="page-dots" role="tablist" aria-label="Jump to chapter">
            {Array.from({ length: TOTAL_CHAPTERS }, (_, i) => {
              const id = i + 1
              return (
                <button
                  key={id}
                  type="button"
                  role="tab"
                  aria-selected={id === current}
                  aria-label={`Chapter ${id}`}
                  className={id === current ? 'dot active' : 'dot'}
                  onClick={() => onGoTo(id)}
                />
              )
            })}
          </div>
        </div>

        <button
          type="button"
          className="glass-btn nav-pill"
          onClick={onNext}
          disabled={!canNext}
          aria-label="Next page"
        >
          Next Page →
        </button>
      </nav>

      <div className="bottom-aside">
        <div className="date-chip" aria-label="Birthday date">
          <strong>21 SEP</strong>
          <span>A special day for a special you</span>
        </div>
        <button
          type="button"
          className="glass-btn fullscreen-btn"
          onClick={onFullscreen}
          aria-label={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
        >
          {isFullscreen ? 'Exit' : 'Full Screen'}
        </button>
      </div>
    </div>
  )
}
