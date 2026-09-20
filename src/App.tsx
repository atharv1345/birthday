import { useCallback, useEffect, useRef, useState } from 'react'
import { DeskBackground } from './components/Environment/DeskBackground'
import { LandingScreen } from './components/Intro/LandingScreen'
import { CinematicIntro } from './components/Intro/CinematicIntro'
import { Book } from './components/Book/Book'
import { ChapterSidebar } from './components/Layout/ChapterSidebar'
import { TopHeader } from './components/Layout/TopHeader'
import { BottomNavigation } from './components/Layout/BottomNavigation'
import { ChapterViews } from './components/Chapters/ChapterViews'
import { KitKatEasterEgg } from './components/EasterEgg/KitKatEasterEgg'
import { getChapter } from './data/chapters'
import { useBookNavigation } from './hooks/useBookNavigation'
import { useMusic } from './hooks/useMusic'
import { useFullscreen } from './hooks/useFullscreen'
import { useIsMobile, usePrefersReducedMotion, useMediaQuery } from './hooks/useMediaQuery'
import './styles/global.css'

type Phase = 'landing' | 'intro' | 'book'

export default function App() {
  const [phase, setPhase] = useState<Phase>('landing')
  const [showKitKat, setShowKitKat] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)

  const isMobile = useIsMobile()
  const isDesktop = useMediaQuery('(min-width: 1024px)')
  const reducedMotion = usePrefersReducedMotion()
  const nav = useBookNavigation(1)
  const music = useMusic()
  const fullscreen = useFullscreen(rootRef)

  const chapter = getChapter(nav.currentChapter)
  const brighter = chapter.type === 'transition' || chapter.type === 'finale'

  // Desktop starts open; tablet/mobile starts closed (overlay drawer)
  const [sidebarOpen, setSidebarOpen] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia('(min-width: 1024px)').matches : true,
  )

  // When crossing desktop ↔ mobile, reset to sensible default (don't fight the user mid-session on same mode)
  const prevDesktop = useRef(isDesktop)
  useEffect(() => {
    if (prevDesktop.current === isDesktop) return
    prevDesktop.current = isDesktop
    setSidebarOpen(isDesktop)
  }, [isDesktop])

  const toggleSidebar = useCallback(() => {
    setSidebarOpen((v) => !v)
  }, [])

  const closeSidebar = useCallback(() => {
    setSidebarOpen(false)
  }, [])

  const openBook = useCallback(() => {
    if (reducedMotion) {
      setPhase('book')
      return
    }
    setPhase('intro')
  }, [reducedMotion])

  const finishIntro = useCallback(() => {
    setPhase('book')
  }, [])

  useEffect(() => {
    if (phase !== 'intro' || !reducedMotion) return
    const t = window.setTimeout(finishIntro, 50)
    return () => window.clearTimeout(t)
  }, [phase, reducedMotion, finishIntro])

  // Escape closes sidebar
  useEffect(() => {
    if (!sidebarOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSidebarOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [sidebarOpen])

  // Lock body scroll when overlay sidebar is open on small screens
  useEffect(() => {
    if (isDesktop || !sidebarOpen) {
      document.body.style.overflow = ''
      return
    }
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [sidebarOpen, isDesktop])

  return (
    <div className="app-root" ref={rootRef}>
      <DeskBackground brighter={phase === 'book' && brighter} reducedMotion={reducedMotion} />

      {phase === 'landing' && <LandingScreen onOpen={openBook} />}

      {phase === 'intro' && <CinematicIntro onComplete={finishIntro} />}

      {phase === 'book' && (
        <div
          className={[
            'app-shell',
            sidebarOpen ? 'sidebar-open' : 'sidebar-closed',
            isDesktop ? 'layout-desktop' : 'layout-overlay',
          ].join(' ')}
        >
          <ChapterSidebar
            currentChapter={nav.currentChapter}
            isOpen={sidebarOpen}
            overlay={!isDesktop}
            onSelect={(id) => {
              nav.goTo(id)
              // Overlay drawers close after pick; desktop stays as user left it
              if (!isDesktop) setSidebarOpen(false)
            }}
            onClose={closeSidebar}
          />

          <div className="app-main">
            <TopHeader
              onMenu={toggleSidebar}
              menuOpen={sidebarOpen}
              isPlaying={music.isPlaying}
              musicAvailable={music.available}
              progress={music.progress}
              volume={music.volume}
              onToggleMusic={music.toggle}
              onVolume={music.setVolume}
              compactMusic={isMobile}
            />

            <Book
              chapterId={nav.currentChapter}
              singlePage={!isDesktop}
              isTurning={nav.isTurning}
              turnDirection={nav.turnDirection}
              left={<ChapterViews chapter={chapter} side="left" onKitKat={() => setShowKitKat(true)} />}
              right={<ChapterViews chapter={chapter} side="right" onKitKat={() => setShowKitKat(true)} />}
              mobileContent={
                <ChapterViews chapter={chapter} side="full" onKitKat={() => setShowKitKat(true)} />
              }
            />

            <BottomNavigation
              current={nav.currentChapter}
              canPrev={nav.canPrev}
              canNext={nav.canNext}
              isFullscreen={fullscreen.isFullscreen}
              onPrev={nav.prev}
              onNext={nav.next}
              onGoTo={(id) => nav.goTo(id)}
              onFullscreen={fullscreen.toggle}
            />
          </div>
        </div>
      )}

      <KitKatEasterEgg open={showKitKat} onClose={() => setShowKitKat(false)} />
    </div>
  )
}
