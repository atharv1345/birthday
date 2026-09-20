import type { ReactNode } from 'react'
import type { LilySpot, LilyVisibility } from '../../hooks/usePageLilies'
import { BookPage } from './BookPage'

interface Props {
  singlePage: boolean
  left: ReactNode
  right: ReactNode
  mobileContent: ReactNode
  isTurning: boolean
  turnDirection: 'next' | 'prev' | null
  leftLily?: LilySpot | null
  rightLily?: LilySpot | null
  singleLily?: LilySpot | null
  lilyVisibility?: LilyVisibility
}

export function BookSpread({
  singlePage,
  left,
  right,
  mobileContent,
  isTurning,
  turnDirection,
  leftLily,
  rightLily,
  singleLily,
  lilyVisibility = 'visible',
}: Props) {
  if (singlePage) {
    return (
      <div className={`book-spread single-page ${isTurning ? 'turning' : ''}`}>
        <BookPage
          side="single"
          lily={singleLily}
          lilyVisibility={lilyVisibility}
          isTurning={isTurning}
        >
          {mobileContent}
        </BookPage>
        {isTurning && turnDirection ? (
          <div className={`flip-leaf ${turnDirection} is-flipping`} aria-hidden="true">
            <div className="flip-face front" />
            <div className="flip-face back" />
          </div>
        ) : null}
      </div>
    )
  }

  return (
    <div className={`book-spread ${isTurning ? 'turning' : ''}`}>
      <BookPage
        side="left"
        lily={leftLily}
        lilyVisibility={lilyVisibility}
        isTurning={isTurning}
      >
        {left}
      </BookPage>
      <span className="book-spine" aria-hidden="true" />
      <BookPage
        side="right"
        lily={rightLily}
        lilyVisibility={lilyVisibility}
        isTurning={isTurning}
      >
        {right}
      </BookPage>
      {isTurning && turnDirection ? (
        <div className={`flip-leaf ${turnDirection} is-flipping`} aria-hidden="true">
          <div className="flip-face front" />
          <div className="flip-face back" />
        </div>
      ) : null}
    </div>
  )
}
