import { PressedLily } from '../Scrapbook/PressedLily'
import './LandingScreen.css'

interface Props {
  onOpen: () => void
}

export function LandingScreen({ onOpen }: Props) {
  return (
    <section className="landing" aria-label="Welcome">
      <PressedLily size={200} className="landing-lily landing-lily-a" />
      <PressedLily size={120} className="landing-lily landing-lily-b" />

      <div className="landing-card anim-fade-up">
        <p className="landing-date">21 September</p>
        <h1 className="landing-title">A Few Pages About You, Jii ♡</h1>
        <p className="landing-sub">
          A little book about the little things that make you, you.
        </p>
        <button type="button" className="open-book-btn" onClick={onOpen}>
          Open the Book
        </button>
      </div>

      <div className="landing-book" aria-hidden="true">
        <div className="landing-book-cover">
          <PressedLily size={72} className="cover-lily cover-lily-left" />
          <PressedLily size={64} className="cover-lily cover-lily-right" />
          <div className="cover-chocolate" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
          </div>
          <span className="landing-book-title">Our Book</span>
        </div>
      </div>
    </section>
  )
}
