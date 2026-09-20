import type { ReactNode } from 'react'
import type { LilySpot, LilyVisibility } from '../../hooks/usePageLilies'
import { cornerStyle } from '../../hooks/usePageLilies'
import { PressedLily } from '../Scrapbook/PressedLily'

interface Props {
  side: 'left' | 'right' | 'single'
  children: ReactNode
  lily?: LilySpot | null
  lilyVisibility?: LilyVisibility
  isTurning?: boolean
}

export function BookPage({ side, children, lily, lilyVisibility = 'visible', isTurning }: Props) {
  const turnClass = isTurning ? 'page-lily-turning' : ''
  const visClass = lilyVisibility ? `page-lily-${lilyVisibility}` : ''

  const slotStyle = lily
    ? {
        ...cornerStyle(lily.corner),
        transform: `rotate(${lily.rotate}deg)${lily.flip ? ' scaleX(-1)' : ''}`,
        opacity: lily.opacity,
      }
    : undefined

  return (
    <article className={`book-page ${side}`} aria-label={`${side} page`}>
      {side !== 'single' ? <span className="page-edge" aria-hidden="true" /> : null}

      {lily ? (
        <div className={`page-lily-slot ${turnClass} ${visClass}`} style={slotStyle}>
          <PressedLily size={lily.size} className="page-corner-lily" />
        </div>
      ) : null}

      <div className="page-inner">{children}</div>
    </article>
  )
}
