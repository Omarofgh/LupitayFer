'use client'

import { useEffect, useRef, useState } from 'react'

export function IntroVideo() {
  const [done, setDone] = useState(false)
  const [leaving, setLeaving] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  // Prevent scrolling while the intro is visible
  useEffect(() => {
    if (!done) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [done])

  function dismiss() {
    if (leaving) return
    setLeaving(true)
    // Wait for the fade-out transition before unmounting
    window.setTimeout(() => setDone(true), 700)
  }

  if (done) return null

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-background transition-opacity duration-700 ${
        leaving ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <video
        ref={videoRef}
        className="h-full w-full object-cover"
        autoPlay
        muted
        playsInline
        preload="auto"
        poster="/images/hero.jpg"
        onEnded={dismiss}
        onError={dismiss}
      >
        <source src="/video/intro.mp4" type="video/mp4" />
      </video>

      {/* Skip */}
      <button
        type="button"
        onClick={dismiss}
        className="absolute bottom-8 right-8 rounded-full border border-background/50 px-5 py-2 text-xs uppercase tracking-[0.25em] text-background/90 backdrop-blur-sm transition-colors hover:bg-background/20"
      >
        Saltar intro
      </button>
    </div>
  )
}
