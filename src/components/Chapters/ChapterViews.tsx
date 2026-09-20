import type { Chapter } from '../../data/chapters'
import { assetUrl } from '../../data/chapters'
import {
  HandwrittenNote,
  Heart,
  MiniSprig,
  PaperClip,
  Polaroid,
  Star,
  StickyNote,
  Tape,
  TornPaper,
} from '../Scrapbook'
import { BirthdayFinale } from '../Finale/BirthdayFinale'
import './ChapterViews.css'

interface Props {
  chapter: Chapter
  side: 'left' | 'right' | 'full'
  onKitKat?: () => void
}

export function ChapterViews({ chapter, side, onKitKat }: Props) {
  const showLeft = side === 'left' || side === 'full'
  const showRight = side === 'right' || side === 'full'

  return (
    <div className={`chapter-view type-${chapter.type} side-${side}`}>
      {showLeft ? <Header chapter={chapter} /> : null}

      {chapter.type === 'story' && (
        <Chapter01 chapter={chapter} showLeft={showLeft} showRight={showRight} />
      )}
      {chapter.type === 'scrapbook' && (
        <Chapter02 chapter={chapter} showLeft={showLeft} showRight={showRight} />
      )}
      {chapter.type === 'polaroid-hero' && (
        <Chapter03 chapter={chapter} showLeft={showLeft} showRight={showRight} />
      )}
      {chapter.type === 'cards' && (
        <Chapter04 chapter={chapter} showLeft={showLeft} showRight={showRight} />
      )}
      {chapter.type === 'notes' && (
        <Chapter05 chapter={chapter} showLeft={showLeft} showRight={showRight} />
      )}
      {chapter.type === 'timeline' && (
        <Chapter06 chapter={chapter} showLeft={showLeft} showRight={showRight} />
      )}
      {chapter.type === 'chat-feel' && (
        <Chapter07 chapter={chapter} showLeft={showLeft} showRight={showRight} />
      )}
      {chapter.type === 'lily' && (
        <Chapter08 chapter={chapter} showLeft={showLeft} showRight={showRight} />
      )}
      {chapter.type === 'letter' && (
        <Chapter09 chapter={chapter} showLeft={showLeft} showRight={showRight} />
      )}
      {chapter.type === 'transition' && (
        <Chapter10 chapter={chapter} showLeft={showLeft} showRight={showRight} />
      )}
      {chapter.type === 'finale' && (showLeft || showRight) && (
        <BirthdayFinale
          left={chapter.leftContent}
          right={chapter.rightContent}
          side={side}
          onKitKat={onKitKat}
          leftNote={chapter.leftNote}
          rightNote={chapter.rightNote}
        />
      )}
    </div>
  )
}

function Header({ chapter }: { chapter: Chapter }) {
  return (
    <header className="chapter-header">
      <p className="chapter-kicker">Chapter {chapter.number}</p>
      <h2 className="chapter-heading">{chapter.title}</h2>
      {chapter.subtitle ? <p className="chapter-sub">{chapter.subtitle}</p> : null}
    </header>
  )
}

function HeartList({ items }: { items: string[] }) {
  return (
    <ul className="heart-list">
      {items.map((item) => (
        <li key={item}>
          <Heart />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

function Chapter01({
  chapter,
  showLeft,
  showRight,
}: {
  chapter: Chapter
  showLeft: boolean
  showRight: boolean
}) {
  return (
    <>
      {showLeft && (
        <div className="scrap-spread">
          {chapter.leftContent.map((p, i) => (
            <p key={`ch1-l-${i}`} className="serif-body story-p">
              {p}
            </p>
          ))}
          {chapter.leftNote ? (
            <StickyNote rotate={-3} color="pink" className="story-side-note">
              {chapter.leftNote}
            </StickyNote>
          ) : null}
        </div>
      )}
      {showRight && (
        <div className="scrap-spread">
          {chapter.rightHeading ? (
            <p className="story-right-heading">{chapter.rightHeading}</p>
          ) : null}
          {chapter.rightContent.map((p, i) => (
            <p key={`ch1-r-${i}`} className="serif-body story-p">
              {p}
            </p>
          ))}
          {chapter.horizontalTimeline?.length ? (
            <div className="mini-timeline story-h-timeline">
              {chapter.horizontalTimeline.map((step, i) => (
                <span key={step} className="timeline-chip">
                  {i > 0 ? <span className="timeline-arrow">→</span> : null}
                  <span>{step}</span>
                </span>
              ))}
            </div>
          ) : null}
          {chapter.rightNote ? (
            <StickyNote rotate={2} color="cream" className="align-end">
              {chapter.rightNote}
            </StickyNote>
          ) : null}
        </div>
      )}
    </>
  )
}

function Chapter02({
  chapter,
  showLeft,
  showRight,
}: {
  chapter: Chapter
  showLeft: boolean
  showRight: boolean
}) {
  return (
    <>
      {showLeft && (
        <div className="scrap-spread">
          {chapter.leftContent.map((p, i) => (
            <p key={`ch2-l-${i}`} className="serif-body story-p">
              {p}
            </p>
          ))}
          {chapter.leftNote ? (
            <TornPaper className="scrap-torn">
              <HandwrittenNote>
                {chapter.leftNote} <Heart />
              </HandwrittenNote>
            </TornPaper>
          ) : null}
          <div className="polaroid-wrap">
            <Tape rotate={-14} className="tape-top" />
            <Polaroid
              src="pink-lily.png"
              caption="the quiet beginning ♡"
              rotate={-2}
              alt="Quiet beginning"
            />
          </div>
          <StickyNote rotate={-1} color="cream">
            It started small.
          </StickyNote>
          <div className="flow-steps">
            {(chapter.stickyNotes ?? []).map((s) => (
              <StickyNote key={s} rotate={0} color="pink" taped={false} className="flow-sticky">
                {s}
              </StickyNote>
            ))}
          </div>
        </div>
      )}
      {showRight && (
        <div className="scrap-spread">
          <div className="sticky-fan">
            <StickyNote rotate={-2} color="pink">
              random conversations
            </StickyNote>
            <StickyNote rotate={1} color="cream">
              daily messages <Heart />
            </StickyNote>
            <StickyNote rotate={-1} color="rose">
              jokes &amp; familiarity ✦
            </StickyNote>
          </div>
          <div className="clipped-note">
            <PaperClip />
            <TornPaper>
              {chapter.rightContent.map((p, i) => (
                <HandwrittenNote key={`ch2-r-${i}`}>{p}</HandwrittenNote>
              ))}
            </TornPaper>
          </div>
          {chapter.rightNote ? (
            <p className="story-right-heading">{chapter.rightNote}</p>
          ) : null}
          {chapter.bullets ? <HeartList items={chapter.bullets} /> : null}
          <div className="row-with-sprig">
            <div className="polaroid-wrap small">
              <Tape rotate={8} className="tape-top" />
              <Polaroid
                src="pink-lily.png"
                caption="late talks, good vibes ♡"
                rotate={1}
                alt="Late talks"
              />
            </div>
            <MiniSprig />
          </div>
          {chapter.closingNote ? (
            <StickyNote rotate={1} color="cream">
              {chapter.closingNote} <Heart />
            </StickyNote>
          ) : null}
        </div>
      )}
    </>
  )
}

function Chapter03({
  chapter,
  showLeft,
  showRight,
}: {
  chapter: Chapter
  showLeft: boolean
  showRight: boolean
}) {
  return (
    <>
      {showLeft && (
        <div className="scrap-spread">
          {chapter.leftContent.slice(0, 2).map((p) => (
            <p key={p} className="serif-body story-p">
              {p}
            </p>
          ))}
          <p className="hand-emphasis">
            how important that moment was for me. <Heart />
          </p>
          {chapter.leftNote ? (
            <TornPaper className="scrap-torn">
              <Tape rotate={-12} className="tape-inline" />
              <HandwrittenNote>
                {chapter.leftNote} <Heart />
              </HandwrittenNote>
              <MiniSprig className="sprig-inline" />
            </TornPaper>
          ) : null}
          <p className="hand-emphasis small">Why this moment stayed with me:</p>
          {chapter.bullets ? <HeartList items={chapter.bullets} /> : null}
          {chapter.stickyNotes?.[0] ? (
            <StickyNote rotate={6} color="pink" className="story-side-note">
              {chapter.stickyNotes[0]} <Heart />
            </StickyNote>
          ) : null}
        </div>
      )}
      {showRight && (
        <div className="scrap-spread ch03-right">
          <div className="fresher-list">
            {chapter.rightContent.map((p) => (
              <p key={p} className="serif-body story-p">
                {p}
              </p>
            ))}
            <div className="deco-row">
              <Star />
              <Star />
            </div>
          </div>
          <div className="polaroid-wrap anim-reveal-photo">
            <Tape rotate={-16} className="tape-top" />
            <Polaroid
              src={chapter.images?.[0]}
              alt="Fresher party photo"
              caption="Fresher party ♡"
              glow
              rotate={-2}
            />
          </div>
          {chapter.closingNote ? (
            <StickyNote rotate={-4} color="cream">
              <span className="hand-emphasis small">In that moment...</span>
              <br />
              {chapter.closingNote}
            </StickyNote>
          ) : null}
          {chapter.rightNote ? (
            <TornPaper className="quote-block">
              <Tape rotate={8} className="tape-top" />
              <p className="quote-text">“{chapter.rightNote}”</p>
            </TornPaper>
          ) : null}
        </div>
      )}
    </>
  )
}

function Chapter04({
  chapter,
  showLeft,
  showRight,
}: {
  chapter: Chapter
  showLeft: boolean
  showRight: boolean
}) {
  const cards = chapter.cards ?? []
  const mainCards = cards.filter((c) => c.id !== 'kitkat')
  const kitkat = cards.find((c) => c.id === 'kitkat')

  return (
    <>
      {showLeft && (
        <div className="scrap-spread">
          <div className="cards-grid persona-grid">
            {mainCards.map((card) => (
              <StickyNote
                key={card.id}
                rotate={card.id.length % 2 === 0 ? -3 : 4}
                color={card.id === 'naughty' ? 'rose' : card.id === 'caring' ? 'pink' : 'cream'}
                className="persona-sticky"
              >
                <span className="persona-icon" aria-hidden="true">
                  {card.icon ?? '♡'}
                </span>
                <strong>{card.title}</strong>
                <span>{card.line}</span>
              </StickyNote>
            ))}
          </div>
          {chapter.leftNote ? (
            <TornPaper className="scrap-torn wide">
              <HandwrittenNote>
                {chapter.leftNote} <Heart />
              </HandwrittenNote>
            </TornPaper>
          ) : null}
        </div>
      )}
      {showRight && (
        <div className="scrap-spread ch04-right">
          {kitkat ? (
            <StickyNote rotate={-4} color="rose" className="kitkat-card">
              <strong>KITKAT 🍫</strong>
              <span>{kitkat.line}</span>
            </StickyNote>
          ) : null}
          <div className="polaroid-wrap small">
            <Tape rotate={-10} className="tape-top" />
            <Polaroid
              src="kitkat.png"
              caption={chapter.closingNote ?? 'Break. Smile. Repeat. ♡'}
              rotate={3}
              alt="KitKat"
            />
          </div>
          <TornPaper className="scrap-torn">
            {chapter.rightContent.map((p) => (
              <p key={p} className="serif-body story-p">
                {p}
              </p>
            ))}
          </TornPaper>
          {chapter.rightNote ? (
            <StickyNote rotate={5} color="pink">
              <span className="clip-inline">
                <PaperClip />
              </span>
              {chapter.rightNote} <Heart />
            </StickyNote>
          ) : null}
        </div>
      )}
    </>
  )
}

function Chapter05({
  chapter,
  showLeft,
  showRight,
}: {
  chapter: Chapter
  showLeft: boolean
  showRight: boolean
}) {
  const notes = chapter.notes ?? []
  const factBanner = chapter.stickyNotes?.[1]
  const sameChats = chapter.stickyNotes?.[0]

  return (
    <>
      {showLeft && (
        <div className="scrap-spread ch05-left">
          <div className="ch05-stickies">
            {notes.map((note, i) => (
              <StickyNote
                key={note}
                rotate={i === 1 ? 3 : i === 2 ? -3 : -5}
                color={i === 1 ? 'cream' : 'pink'}
                className={`ch05-sticky ch05-sticky-${i}`}
              >
                {note}
              </StickyNote>
            ))}
          </div>

          <div className="clipped-note">
            <PaperClip />
            <TornPaper>
              {chapter.leftContent.map((p, i) => (
                <HandwrittenNote key={`ch5-l-${i}`}>{p}</HandwrittenNote>
              ))}
            </TornPaper>
          </div>

          {chapter.leftNote ? (
            <StickyNote rotate={1} color="cream" className="wide-sticky">
              {chapter.leftNote} <Heart />
            </StickyNote>
          ) : null}

          <p className="ch05-scribble">
            Random chats but permanent memories… <Heart />
          </p>
        </div>
      )}

      {showRight && (
        <div className="scrap-spread ch05-right">
          {factBanner ? <p className="ch05-banner">{factBanner}</p> : null}

          {sameChats ? (
            <StickyNote rotate={4} color="cream" className="ch05-corner-note">
              {sameChats}
            </StickyNote>
          ) : null}

          <p className="hand-emphasis small">More little things...</p>
          {chapter.bullets ? <HeartList items={chapter.bullets} /> : null}

          {chapter.rightNote ? <p className="ch05-banner long">{chapter.rightNote}</p> : null}

          <div className="chat-polaroid-wrap">
            <Tape rotate={-10} className="tape-top" />
            <figure className="chat-fit-polaroid">
              <div className="chat-fit-frame" aria-label="Little chats">
                {(chapter.bubbles ?? []).map((b, i) => (
                  <div key={`${b.text}-${i}`} className={`chat-fit-bubble ${b.side}`}>
                    <span className="chat-fit-text">{b.text}</span>
                    {b.time ? <small>{b.time}</small> : null}
                  </div>
                ))}
              </div>
              <figcaption>
                {chapter.closingNote ?? 'All these little chats… They mean a lot.'} ♡
              </figcaption>
            </figure>
          </div>

          <div className="ch05-footer-row">
            <p className="ch05-scribble small">Different topics · Same you ♡</p>
            <div className="ch05-grateful">
              <MiniSprig />
              <span>Grateful for you ♡</span>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

function Chapter06({
  chapter,
  showLeft,
  showRight,
}: {
  chapter: Chapter
  showLeft: boolean
  showRight: boolean
}) {
  return (
    <>
      {showLeft && (
        <div className="scrap-spread ch06-left">
          {chapter.leftContent.map((p, i) => (
            <p key={`ch6-l-${i}`} className="serif-body story-p">
              {p}
            </p>
          ))}

          {chapter.stickyNotes?.[0] ? (
            <StickyNote rotate={-4} color="cream">
              {chapter.stickyNotes[0]}
            </StickyNote>
          ) : null}

          {chapter.leftNote ? (
            <p className="serif-body story-p ch06-fill">
              {chapter.leftNote}
            </p>
          ) : null}

          <p className="serif-body story-p ch06-fill">
            Not counted in calendars — counted in quiet familiarity, shared laughs, and the comfort of simply talking.
          </p>

          <div className="clipped-note ch06-years">
            <PaperClip />
            <div className="ch06-years-card">
              <p className="hand-emphasis small">Two years of...</p>
              {chapter.bullets ? <HeartList items={chapter.bullets} /> : null}
            </div>
          </div>
        </div>
      )}
      {showRight && (
        <div className="scrap-spread ch06-right">
          <div className="timeline detailed">
            <ol>
              {(chapter.timeline ?? []).map((step, i) => (
                <li key={step.label} style={{ animationDelay: `${i * 0.08}s` }}>
                  <span className="tl-dot" />
                  <span className="tl-copy">
                    <strong className="tl-label">{step.label}</strong>
                    {step.detail ? <em>{step.detail}</em> : null}
                  </span>
                </li>
              ))}
            </ol>
          </div>
          <div className="deco-row">
            <Star />
            <Heart />
            <Star />
          </div>
          {chapter.rightNote ? (
            <StickyNote rotate={2} color="pink" className="wide-sticky">
              {chapter.rightNote} <Heart />
            </StickyNote>
          ) : null}
        </div>
      )}
    </>
  )
}

function Chapter07({
  chapter,
  showLeft,
  showRight,
}: {
  chapter: Chapter
  showLeft: boolean
  showRight: boolean
}) {
  return (
    <>
      {showLeft && (
        <div className="scrap-spread">
          <HeartList items={chapter.leftContent} />
          {chapter.leftNote ? (
            <div className="clipped-note">
              <PaperClip />
              <StickyNote rotate={-4} color="cream">
                {chapter.leftNote} <Heart />
              </StickyNote>
            </div>
          ) : null}
          {chapter.rightNote ? (
            <StickyNote rotate={5} color="rose">
              {chapter.rightNote} <Heart />
            </StickyNote>
          ) : null}
        </div>
      )}
      {showRight && (
        <div className="scrap-spread">
          {chapter.rightContent[0] ? (
            <p className="hand-emphasis">
              {chapter.rightContent[0]} <Heart />
            </p>
          ) : null}
          <div className="chat-universe">
            {(chapter.bubbles ?? []).map((b, i) => (
              <div
                key={`${b.text}-${i}`}
                className={`chat-bubble ${b.side}`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <span>{b.text}</span>
                {b.time ? <small>{b.time}</small> : null}
              </div>
            ))}
          </div>
          {chapter.closingNote ? (
            <StickyNote rotate={-2} color="pink" className="wide-sticky">
              {chapter.closingNote} <Heart />
            </StickyNote>
          ) : null}
        </div>
      )}
    </>
  )
}

function Chapter08({
  chapter,
  showLeft,
  showRight,
}: {
  chapter: Chapter
  showLeft: boolean
  showRight: boolean
}) {
  return (
    <>
      {showLeft && (
        <div className="scrap-spread">
          {chapter.leftContent.map((p) => (
            <p key={p} className="serif-body story-p lily-line">
              {p}
            </p>
          ))}
          <div className="polaroid-wrap">
            <Tape rotate={-14} className="tape-top" />
            <Polaroid
              src="pink-lily.png"
              caption="soft, simple, beautiful."
              alt="Pink lily"
              rotate={-2}
              glow
            />
          </div>
          {chapter.leftNote ? (
            <StickyNote rotate={5} color="pink">
              {chapter.leftNote}
            </StickyNote>
          ) : null}
          {chapter.stickyNotes?.[0] ? (
            <StickyNote rotate={-3} color="cream">
              {chapter.stickyNotes[0]}
            </StickyNote>
          ) : null}
          {chapter.rightNote ? (
            <TornPaper className="scrap-torn">
              <HandwrittenNote>{chapter.rightNote}</HandwrittenNote>
            </TornPaper>
          ) : null}
        </div>
      )}
      {showRight && (
        <div className="scrap-spread lily-interactive">
          <StickyNote rotate={-2} color="rose">
            Touch the flower ↓
          </StickyNote>
          <div className="lily-hero-wrap">
            <img
              className="lily-hero-img"
              src={`${import.meta.env.BASE_URL}images/pink-lily.png`}
              alt="Pink lily"
            />
          </div>
          <div className="lily-labels">
            {(chapter.rightContent ?? []).map((label) => (
              <span key={label} className="lily-tag">
                {label}
              </span>
            ))}
          </div>
          <StickyNote rotate={3} color="cream">
            <span className="hand-emphasis small">A little thing I noticed</span>
            <br />I notice the small things associated with you — and somehow they stay.
          </StickyNote>
          {chapter.closingNote ? (
            <StickyNote rotate={-1} color="pink" className="wide-sticky">
              {chapter.closingNote}
            </StickyNote>
          ) : null}
        </div>
      )}
    </>
  )
}

function Chapter09({
  chapter,
  showLeft,
  showRight,
}: {
  chapter: Chapter
  showLeft: boolean
  showRight: boolean
}) {
  return (
    <>
      {showLeft && (
        <div className="scrap-spread letter-col">
          {chapter.leftContent.map((p) => (
            <p key={p} className="serif-body story-p">
              {p}
            </p>
          ))}
          <div className="polaroid-wrap small">
            <Tape rotate={-12} className="tape-top" />
            <Polaroid
              src="pink-lily.png"
              caption={chapter.leftNote ?? ''}
              alt="Feelings"
              rotate={2}
            />
          </div>
          {chapter.stickyNotes?.[0] ? (
            <StickyNote rotate={4} color="cream">
              {chapter.stickyNotes[0]}
            </StickyNote>
          ) : null}
        </div>
      )}
      {showRight && (
        <div className="scrap-spread letter-col soft">
          <StickyNote rotate={-2} color="pink" className="banner-sticky">
            I&apos;m not going anywhere. <Heart />
          </StickyNote>
          <TornPaper>
            {chapter.rightContent.map((p) => (
              <p key={p} className="serif-body story-p">
                {p}
              </p>
            ))}
          </TornPaper>
          {chapter.closingNote ? (
            <StickyNote rotate={3} color="cream">
              {chapter.closingNote}
            </StickyNote>
          ) : null}
          {chapter.rightNote ? (
            <StickyNote rotate={-3} color="rose" className="wide-sticky">
              {chapter.rightNote}
            </StickyNote>
          ) : null}
        </div>
      )}
    </>
  )
}

function Chapter10({
  chapter,
  showLeft,
  showRight,
}: {
  chapter: Chapter
  showLeft: boolean
  showRight: boolean
}) {
  return (
    <>
      {showLeft && (
        <div className="scrap-spread transition-chapter aligned">
          {chapter.leftContent.map((p) => (
            <p
              key={p}
              className={`serif-body story-p ${p.includes('YOU') ? 'big-you' : ''}`}
            >
              {p.includes("isn't") ? (
                <>
                  {p.split("isn't").map((part, i) =>
                    i === 0 ? (
                      <span key={i}>{part}</span>
                    ) : (
                      <span key={i}>
                        <em className="soft-isnt">isn&apos;t</em>
                        {part}
                      </span>
                    ),
                  )}
                </>
              ) : (
                p
              )}
            </p>
          ))}
          {chapter.leftNote ? (
            <StickyNote rotate={-4} color="pink">
              {chapter.leftNote} <Heart />
            </StickyNote>
          ) : null}
          {chapter.bullets ? (
            <TornPaper className="scrap-torn">
              <p className="hand-emphasis small">The girl who...</p>
              <HeartList items={chapter.bullets} />
            </TornPaper>
          ) : null}
          <StickyNote rotate={-3} color="cream" className="photo-sticky" taped>
            <img
              src={assetUrl('images/jii-portrait.png')}
              alt="Jii"
              className="photo-sticky-img"
            />
            <span className="photo-sticky-caption">
              Thank you for being exactly who you are. ♡
            </span>
          </StickyNote>
        </div>
      )}
      {showRight && (
        <div className="scrap-spread transition-chapter aligned">
          <StickyNote rotate={2} color="rose" className="banner-sticky">
            So today...
          </StickyNote>
          <HeartList items={chapter.rightContent.slice(0, 4)} />
          {chapter.rightContent.slice(4).map((p) => (
            <p
              key={p}
              className={`serif-body story-p ${
                p.includes('YOU') || p.includes('special') ? 'emph-line' : ''
              }`}
            >
              {p}
            </p>
          ))}
          {chapter.rightNote ? (
            <div className="clipped-note">
              <PaperClip />
              <TornPaper>
                <HandwrittenNote>
                  {chapter.rightNote} <Heart />
                </HandwrittenNote>
              </TornPaper>
            </div>
          ) : null}
          {chapter.stickyNotes?.[0] ? (
            <p className="ch10-wish">
              <span className="hand-emphasis">{chapter.stickyNotes[0]}</span>
              {chapter.stickyNotes[1] ? (
                <>
                  <br />
                  {chapter.stickyNotes[1]}
                </>
              ) : null}
            </p>
          ) : null}
          {chapter.closingNote ? (
            <p className="ch10-closing">
              {chapter.closingNote} <Heart />
            </p>
          ) : null}
        </div>
      )}
    </>
  )
}
