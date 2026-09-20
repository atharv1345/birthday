import { Heart, StickyNote } from '../Scrapbook'
import './BirthdayFinale.css'

interface Props {
  left: string[]
  right: string[]
  side: 'left' | 'right' | 'full'
  onKitKat?: () => void
  leftNote?: string
  rightNote?: string
}

export function BirthdayFinale({ left, right, side, onKitKat, leftNote, rightNote }: Props) {
  const showAll = side === 'full'
  const showLeft = side === 'left' || showAll
  const showRight = side === 'right' || showAll

  return (
    <div className="birthday-finale">
      <div className="confetti" aria-hidden="true">
        {Array.from({ length: 14 }, (_, i) => (
          <span key={i} style={{ left: `${8 + i * 6}%`, animationDelay: `${i * 0.2}s` }} />
        ))}
      </div>

      {showLeft && (
        <div className="finale-hero anim-fade-up">
          <p className="finale-kicker">21 September</p>
          <h2 className="finale-title">HAPPY BIRTHDAY</h2>
          <p className="finale-name">Sumeet Jii ♡</p>
          <div className="finale-message">
            {left.map((p) => (
              <p key={p} className="serif-body">
                {p}
              </p>
            ))}
          </div>
          {leftNote ? (
            <StickyNote rotate={-3} color="cream" className="finale-sticky">
              {leftNote} <Heart />
            </StickyNote>
          ) : null}
        </div>
      )}

      {showRight && (
        <div className="finale-right anim-fade-up">
          <ul className="finale-wishes">
            {right
              .filter((p) => !p.toLowerCase().includes('happy birthday'))
              .map((p) => (
                <li key={p}>
                  <Heart />
                  <span>{p}</span>
                </li>
              ))}
          </ul>
          <p className="finale-closing">Happy Birthday, Jii. 🌷</p>

          {onKitKat ? (
            <button
              type="button"
              className="kitkat-trigger"
              onClick={onKitKat}
              aria-label="KitKat surprise"
            >
              <span className="kitkat-bar" aria-hidden="true" />
              <span>Tap for a break</span>
            </button>
          ) : null}

          {rightNote ? (
            <StickyNote rotate={4} color="pink" className="finale-right-note">
              <Heart /> {rightNote} <Heart />
            </StickyNote>
          ) : null}
        </div>
      )}
    </div>
  )
}
