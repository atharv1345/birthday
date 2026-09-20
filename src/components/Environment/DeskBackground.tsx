import { PressedLily } from '../Scrapbook/PressedLily'
import './DeskBackground.css'
import { Particles } from './Particles'
import { Petals } from './Petals'

interface Props {
  brighter?: boolean
  reducedMotion?: boolean
}

export function DeskBackground({ brighter = false, reducedMotion = false }: Props) {
  return (
    <div className={`desk-bg ${brighter ? 'brighter' : ''}`} aria-hidden="true">
      <div className="desk-gradient" />
      <div className="desk-bokeh" />
      <div className="desk-wood" />

      <div className="desk-candle-wrap">
        <div className="desk-candle-glow" />
        <div className="desk-candle-glass">
          <div className="desk-candle" />
        </div>
      </div>

      <PressedLily size={200} className="desk-lily-img desk-lily-left" />
      <PressedLily size={120} className="desk-lily-img desk-lily-back" />

      <div className="desk-kitkat" title="KitKat">
        <span />
        <span />
        <span />
        <span />
      </div>

      <div className="desk-vignette" />
      {!reducedMotion && (
        <>
          <Particles />
          <Petals />
        </>
      )}
    </div>
  )
}
