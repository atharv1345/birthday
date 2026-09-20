import './CinematicIntro.css'

interface Props {
  onComplete: () => void
}

export function CinematicIntro({ onComplete }: Props) {
  return (
    <div className="cinematic-intro" role="status" aria-live="polite">
      <div className="intro-cover is-opening" onAnimationEnd={onComplete}>
        <h1>Our Book ♡</h1>
        <p>For Sumeet Jii</p>
      </div>
      <p className="intro-caption anim-fade-up">Opening a few pages about you…</p>
    </div>
  )
}
