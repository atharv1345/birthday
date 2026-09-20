import { MusicPlayer } from '../Music/MusicPlayer'
import './TopHeader.css'

interface Props {
  onMenu: () => void
  menuOpen: boolean
  isPlaying: boolean
  musicAvailable: boolean
  progress: number
  volume: number
  onToggleMusic: () => void
  onVolume: (v: number) => void
  compactMusic: boolean
}

export function TopHeader({
  onMenu,
  menuOpen,
  isPlaying,
  musicAvailable,
  progress,
  volume,
  onToggleMusic,
  onVolume,
  compactMusic,
}: Props) {
  return (
    <header className="top-header">
      <button
        type="button"
        className={`menu-button${menuOpen ? ' is-active' : ''}`}
        onClick={onMenu}
        aria-label={menuOpen ? 'Hide chapters' : 'Show chapters'}
        aria-expanded={menuOpen}
        aria-controls="chapter-sidebar"
      >
        <span className="menu-icon" aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
      </button>

      <div className="page-heading">
        <h1>🌸 For Sumeet Jii 🌸</h1>
        <p>A book full of little things that make you, you.</p>
      </div>

      <MusicPlayer
        isPlaying={isPlaying}
        available={musicAvailable}
        progress={progress}
        volume={volume}
        onToggle={onToggleMusic}
        onVolume={onVolume}
        compact={compactMusic}
      />
    </header>
  )
}
