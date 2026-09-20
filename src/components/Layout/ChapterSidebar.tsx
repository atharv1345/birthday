import { CHAPTERS } from '../../data/chapters'
import './ChapterSidebar.css'

interface Props {
  currentChapter: number
  isOpen: boolean
  overlay: boolean
  onSelect: (id: number) => void
  onClose: () => void
}

export function ChapterSidebar({
  currentChapter,
  isOpen,
  overlay,
  onSelect,
  onClose,
}: Props) {
  return (
    <>
      {overlay && isOpen ? (
        <button
          type="button"
          className="sidebar-backdrop"
          aria-label="Close chapter menu"
          onClick={onClose}
        />
      ) : null}

      <aside
        id="chapter-sidebar"
        className={[
          'chapter-sidebar',
          isOpen ? 'is-open' : 'is-closed',
          overlay ? 'is-overlay' : 'is-docked',
        ].join(' ')}
        aria-label="Chapter navigation"
        aria-hidden={!isOpen}
        {...(!isOpen ? { inert: true } : {})}
      >
        <div className="sidebar-top">
          <div className="book-title">
            <h2>Our Book ♡</h2>
            <span>11 Chapters</span>
          </div>
          <button
            type="button"
            className="sidebar-close"
            onClick={onClose}
            aria-label="Hide chapter menu"
          >
            ✕
          </button>
        </div>

        <nav className="chapters" aria-label="Chapters">
          {CHAPTERS.map((ch) => {
            const active = ch.id === currentChapter
            return (
              <button
                key={ch.id}
                type="button"
                className={`chapter ${active ? 'active' : ''}`}
                aria-current={active ? 'page' : undefined}
                tabIndex={isOpen ? 0 : -1}
                onClick={() => onSelect(ch.id)}
              >
                <span className="chapter-number">{ch.number}</span>
                <span className="chapter-meta">
                  <span className="chapter-name">{ch.title}</span>
                  <span className="chapter-desc">{ch.description}</span>
                </span>
              </button>
            )
          })}
        </nav>
      </aside>
    </>
  )
}
