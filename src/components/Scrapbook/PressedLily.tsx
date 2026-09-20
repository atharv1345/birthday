import type { CSSProperties } from 'react'
import { assetUrl } from '../../data/chapters'

interface Props {
  size?: number
  className?: string
  style?: CSSProperties
}

/** Transparent pink lily — single asset used everywhere */
export function PressedLily({ size = 120, className = '', style }: Props) {
  return (
    <span
      className={`pressed-lily ${className}`}
      style={{ width: size, ...style }}
      aria-hidden="true"
    >
      <img
        src={assetUrl('images/pink-lily.png')}
        alt=""
        draggable={false}
        className="pressed-lily__img"
      />
    </span>
  )
}

/** @deprecated use PressedLily — kept for existing imports */
export function Lily(props: Props) {
  return <PressedLily {...props} />
}
