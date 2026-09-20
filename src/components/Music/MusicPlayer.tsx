import './MusicPlayer.css'

interface Props {
  isPlaying: boolean
  available: boolean
  progress: number
  volume: number
  onToggle: () => void
  onVolume: (v: number) => void
  compact?: boolean
}

export function MusicPlayer({
  isPlaying,
  available,
  progress,
  volume,
  onToggle,
  onVolume,
  compact = false,
}: Props) {
  return (
    <div className={`music-player ${compact ? 'compact' : ''} ${!available ? 'disabled' : ''}`}>
      <button
        type="button"
        className="music-main-btn"
        onClick={onToggle}
        disabled={!available}
        aria-label={
          !available
            ? 'Music unavailable — add birthday-song.mp3'
            : isPlaying
              ? 'Pause music'
              : 'Play our song'
        }
        title={!available ? 'Add public/audio/birthday-song.mp3 to enable' : undefined}
      >
        <span className="music-icon" aria-hidden="true">
          ♫
        </span>
        <span className="music-text">{available ? 'Play our song' : 'No song yet'}</span>
        <span className="music-wave" aria-hidden="true">
          {[0, 1, 2, 3].map((i) => (
            <i
              key={i}
              className={isPlaying ? 'bar playing' : 'bar'}
              style={{ animationDelay: `${i * 0.12}s` }}
            />
          ))}
        </span>
        <span className="play-icon" aria-hidden="true">
          {isPlaying ? '❚❚' : '▶'}
        </span>
      </button>

      {!compact && available ? (
        <div className="music-extra">
          <div className="music-progress" aria-hidden="true">
            <span style={{ width: `${progress * 100}%` }} />
          </div>
          <label className="sr-only" htmlFor="music-volume">
            Volume
          </label>
          <input
            id="music-volume"
            type="range"
            min={0}
            max={1}
            step={0.05}
            value={volume}
            onChange={(e) => onVolume(Number(e.target.value))}
            aria-label="Volume"
          />
        </div>
      ) : null}
    </div>
  )
}
