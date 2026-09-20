import { useCallback, useEffect, useRef, useState } from 'react'
import { assetUrl } from '../data/chapters'

export function useMusic(src = 'audio/birthday-song.mp3') {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [available, setAvailable] = useState(false)
  const [progress, setProgress] = useState(0)
  const [volume, setVolume] = useState(0.7)

  useEffect(() => {
    const audio = new Audio(assetUrl(src))
    audio.preload = 'metadata'
    audio.loop = true
    audio.volume = 0.7
    audioRef.current = audio

    const onCanPlay = () => setAvailable(true)
    const onError = () => setAvailable(false)
    const onTime = () => {
      if (audio.duration) setProgress(audio.currentTime / audio.duration)
    }
    const onEnded = () => setIsPlaying(false)

    audio.addEventListener('canplaythrough', onCanPlay)
    audio.addEventListener('error', onError)
    audio.addEventListener('timeupdate', onTime)
    audio.addEventListener('ended', onEnded)

    return () => {
      audio.pause()
      audio.removeEventListener('canplaythrough', onCanPlay)
      audio.removeEventListener('error', onError)
      audio.removeEventListener('timeupdate', onTime)
      audio.removeEventListener('ended', onEnded)
      audioRef.current = null
    }
  }, [src])

  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = volume
  }, [volume])

  const toggle = useCallback(async () => {
    const audio = audioRef.current
    if (!audio || !available) return
    try {
      if (audio.paused) {
        await audio.play()
        setIsPlaying(true)
      } else {
        audio.pause()
        setIsPlaying(false)
      }
    } catch {
      setIsPlaying(false)
    }
  }, [available])

  const pause = useCallback(() => {
    audioRef.current?.pause()
    setIsPlaying(false)
  }, [])

  return { isPlaying, available, progress, volume, setVolume, toggle, pause }
}
