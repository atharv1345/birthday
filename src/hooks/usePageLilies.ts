import { useEffect, useMemo, useState } from 'react'
import type { CSSProperties } from 'react'

export type LilyCorner = 'bl' | 'br' | 'tl' | 'tr'

export interface LilySpot {
  id: string
  corner: LilyCorner
  size: number
  rotate: number
  flip: boolean
  opacity: number
}

const ALL_CORNERS: LilyCorner[] = ['bl', 'br', 'tl', 'tr']

function hash(seed: number, i: number) {
  return Math.abs(Math.sin(seed * 12.9898 + i * 78.233) * 43758.5453) % 1
}

function cornerSpot(seed: number, corner: LilyCorner, index: number): LilySpot {
  const n = hash(seed, index)
  const n2 = hash(seed + 3, index)
  const n3 = hash(seed + 7, index)

  return {
    id: `${seed}-${corner}-${index}`,
    corner,
    size: 56 + Math.floor(n3 * 48),
    rotate: -18 + Math.floor(n * 36),
    flip: n2 > 0.5,
    opacity: 0.72 + n3 * 0.18,
  }
}

/** Corner-only placements — never overlaps page content */
export function spotsForChapter(chapterId: number, salt = 0, singlePage = false): LilySpot[] {
  const seed = chapterId * 17 + salt
  const shuffled = [...ALL_CORNERS].sort((a, b) => hash(seed, a.charCodeAt(0)) - hash(seed, b.charCodeAt(0)))

  if (singlePage) {
    // One flower, bottom corner only
    const corner = shuffled[0] === 'tl' || shuffled[0] === 'tr' ? 'br' : shuffled[0]
    return [cornerSpot(seed, corner, 0)]
  }

  // Two-page spread: one corner per side (left page / right page)
  const leftCorner = shuffled.find((c) => c === 'bl' || c === 'tl') ?? 'bl'
  const rightCorner = shuffled.find((c) => c === 'br' || c === 'tr') ?? 'br'

  const spots = [
    cornerSpot(seed, leftCorner, 0),
    cornerSpot(seed + 11, rightCorner, 1),
  ]

  // Pink Lily chapter — slightly larger, still in corners
  if (chapterId === 8) {
    spots.forEach((s) => {
      s.size = Math.round(s.size * 1.15)
    })
  }

  return spots
}

export type LilyVisibility = 'visible' | 'hiding' | 'appearing'

export function usePageLilies(chapterId: number, isTurning: boolean, singlePage = false) {
  const [visibility, setVisibility] = useState<LilyVisibility>('visible')
  const [spots, setSpots] = useState<LilySpot[]>(() => spotsForChapter(chapterId, 0, singlePage))
  const [activeChapter, setActiveChapter] = useState(chapterId)

  useEffect(() => {
    if (isTurning) {
      setVisibility('hiding')
      return
    }

    if (chapterId !== activeChapter) {
      setSpots(spotsForChapter(chapterId, Math.floor(Math.random() * 1000), singlePage))
      setActiveChapter(chapterId)
      setVisibility('appearing')
      return
    }

    setVisibility((v) => (v === 'hiding' ? 'appearing' : v))
  }, [isTurning, chapterId, activeChapter, singlePage])

  useEffect(() => {
    if (visibility !== 'appearing') return
    const t = window.setTimeout(() => setVisibility('visible'), 780)
    return () => window.clearTimeout(t)
  }, [visibility])

  return useMemo(() => ({ spots, visibility }), [spots, visibility])
}

export function cornerStyle(corner: LilyCorner): CSSProperties {
  switch (corner) {
    case 'bl':
      return { bottom: '-4%', left: '-8%' }
    case 'br':
      return { bottom: '-4%', right: '-8%' }
    case 'tl':
      return { top: '-3%', left: '-7%' }
    case 'tr':
      return { top: '-3%', right: '-7%' }
  }
}
