import { useCallback, useEffect, useState } from 'react'
import { TOTAL_CHAPTERS } from '../data/chapters'

const TURN_MS = 850

export function useBookNavigation(initial = 1) {
  const [currentChapter, setCurrentChapter] = useState(initial)
  const [isTurning, setIsTurning] = useState(false)
  const [turnDirection, setTurnDirection] = useState<'next' | 'prev' | null>(null)

  const goTo = useCallback(
    (id: number, animate = true) => {
      const clamped = Math.min(TOTAL_CHAPTERS, Math.max(1, id))
      if (clamped === currentChapter || isTurning) return

      if (!animate || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        setCurrentChapter(clamped)
        setTurnDirection(null)
        setIsTurning(false)
        return
      }

      setTurnDirection(clamped > currentChapter ? 'next' : 'prev')
      setIsTurning(true)
      window.setTimeout(() => {
        setCurrentChapter(clamped)
        setIsTurning(false)
        setTurnDirection(null)
      }, TURN_MS)
    },
    [currentChapter, isTurning],
  )

  const next = useCallback(() => {
    if (currentChapter < TOTAL_CHAPTERS) goTo(currentChapter + 1)
  }, [currentChapter, goTo])

  const prev = useCallback(() => {
    if (currentChapter > 1) goTo(currentChapter - 1)
  }, [currentChapter, goTo])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [next, prev])

  return {
    currentChapter,
    isTurning,
    turnDirection,
    goTo,
    next,
    prev,
    canNext: currentChapter < TOTAL_CHAPTERS,
    canPrev: currentChapter > 1,
    total: TOTAL_CHAPTERS,
  }
}
