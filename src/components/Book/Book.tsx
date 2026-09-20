import type { ReactNode } from 'react'
import { BookSpread } from './BookSpread'
import { usePageLilies } from '../../hooks/usePageLilies'
import './BookExtras.css'

interface Props {
  chapterId: number
  singlePage: boolean
  isTurning: boolean
  turnDirection: 'next' | 'prev' | null
  left: ReactNode
  right: ReactNode
  mobileContent: ReactNode
}

export function Book({
  chapterId,
  singlePage,
  isTurning,
  turnDirection,
  left,
  right,
  mobileContent,
}: Props) {
  const { spots, visibility } = usePageLilies(chapterId, isTurning, singlePage)

  return (
    <div className="book-stage">
      <div
        className={`book ${isTurning ? 'is-turning' : ''} ${singlePage ? 'book-mobile' : ''}`}
        role="region"
        aria-label="Memory book"
      >
        {!singlePage && (
          <>
            <div className="book-leather book-leather-left" aria-hidden="true" />
            <div className="book-leather book-leather-right" aria-hidden="true" />
            <div className="book-page-stack left-stack" aria-hidden="true" />
            <div className="book-page-stack right-stack" aria-hidden="true" />
          </>
        )}

        <BookSpread
          singlePage={singlePage}
          left={left}
          right={right}
          mobileContent={mobileContent}
          isTurning={isTurning}
          turnDirection={turnDirection}
          leftLily={singlePage ? null : spots[0]}
          rightLily={singlePage ? null : spots[1]}
          singleLily={null}
          lilyVisibility={visibility}
        />
      </div>
    </div>
  )
}
