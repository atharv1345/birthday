import type { CSSProperties, ReactNode } from 'react'
import { useState } from 'react'
import { assetUrl } from '../../data/chapters'
import './Scrapbook.css'

export { PressedLily, Lily } from './PressedLily'

interface PolaroidProps {
  src?: string
  caption?: string
  alt?: string
  rotate?: number
  className?: string
  glow?: boolean
}

export function Polaroid({
  src,
  caption = '',
  alt = 'Memory photo',
  rotate = -2,
  className = '',
  glow = false,
}: PolaroidProps) {
  const [failed, setFailed] = useState(false)
  const url = src ? assetUrl(`images/${src}`) : ''
  const showImg = Boolean(url) && !failed

  return (
    <figure
      className={`polaroid ${glow ? 'glow' : ''} ${className}`}
      style={{ '--rot': `${rotate}deg` } as CSSProperties}
    >
      <div className="polaroid-frame">
        {showImg ? (
          <img src={url} alt={alt} loading="lazy" onError={() => setFailed(true)} />
        ) : (
          <div className="photo-placeholder" role="img" aria-label={alt}>
            <img
              className="placeholder-lily"
              src={assetUrl('images/pink-lily.png')}
              alt=""
              aria-hidden="true"
            />
            <span>{caption ? 'Memory' : 'Photo coming soon'}</span>
          </div>
        )}
      </div>
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  )
}

export function Tape({
  rotate = -12,
  className = '',
}: {
  rotate?: number
  className?: string
}) {
  return (
    <span
      className={`tape ${className}`}
      style={{ '--rot': `${rotate}deg` } as CSSProperties}
      aria-hidden="true"
    />
  )
}

export function TornPaper({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return <div className={`torn-paper ${className}`}>{children}</div>
}

export function StickyNote({
  children,
  rotate = 3,
  color = 'pink',
  className = '',
  taped = true,
}: {
  children: ReactNode
  rotate?: number
  color?: 'pink' | 'cream' | 'rose'
  className?: string
  taped?: boolean
}) {
  return (
    <div
      className={`sticky-note ${color} ${taped ? 'taped' : ''} ${className}`}
      style={{ '--rot': `${rotate}deg` } as CSSProperties}
    >
      {taped ? <span className="sticky-tape" aria-hidden="true" /> : null}
      <div className="sticky-body">{children}</div>
    </div>
  )
}

export function HandwrittenNote({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return <p className={`handwritten-note ${className}`}>{children}</p>
}

export function Petal({ className = '' }: { className?: string }) {
  return <span className={`scrap-petal ${className}`} aria-hidden="true" />
}

export function Star({ className = '' }: { className?: string }) {
  return (
    <span className={`scrap-star ${className}`} aria-hidden="true">
      ✦
    </span>
  )
}

export function PaperClip({ className = '' }: { className?: string }) {
  return <span className={`paper-clip ${className}`} aria-hidden="true" />
}

export function Heart({ className = '' }: { className?: string }) {
  return (
    <span className={`scrap-heart ${className}`} aria-hidden="true">
      ♡
    </span>
  )
}

export function MiniSprig({ className = '' }: { className?: string }) {
  return (
    <span className={`mini-sprig ${className}`} aria-hidden="true">
      <img src={assetUrl('images/pink-lily.png')} alt="" />
    </span>
  )
}
