'use client'

import { useEffect, useRef } from 'react'

export default function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    let raf: number
    let cx = -9999
    let cy = -9999
    let tx = -9999
    let ty = -9999

    const onMove = (e: MouseEvent) => {
      tx = e.clientX
      ty = e.clientY
    }
    window.addEventListener('mousemove', onMove)

    const tick = () => {
      cx += (tx - cx) * 0.08
      cy += (ty - cy) * 0.08
      el.style.transform = `translate(${cx}px, ${cy}px) translate(-50%, -50%)`
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed top-0 left-0 z-[9998]"
      style={{
        width: '700px',
        height: '700px',
        background:
          'radial-gradient(circle, rgba(119,221,119,0.055) 0%, rgba(119,221,119,0.02) 35%, transparent 70%)',
        willChange: 'transform',
      }}
    />
  )
}
