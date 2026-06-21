'use client'

import { useEffect, useRef, useState } from 'react'

export function useScrollReveal<T extends HTMLElement>(
  threshold = 0.15,
  rootMargin = '0px 0px -48px 0px'
) {
  const ref = useRef<T>(null)
  const [ready, setReady] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    setReady(true)

    if (!el) {
      setVisible(true)
      return
    }

    const reveal = () => setVisible(true)

    const isInViewport = () => {
      const rect = el.getBoundingClientRect()
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight
      const viewportWidth = window.innerWidth || document.documentElement.clientWidth

      const visibleHeight = Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0)
      const visibleWidth = Math.min(rect.right, viewportWidth) - Math.max(rect.left, 0)

      if (rect.height <= 0 || rect.width <= 0 || visibleHeight <= 0 || visibleWidth <= 0) {
        return false
      }

      const visibleArea = visibleHeight * visibleWidth
      const totalArea = rect.height * rect.width

      return visibleArea / totalArea >= threshold
    }

    const revealIfVisible = () => {
      if (isInViewport()) reveal()
    }

    revealIfVisible()
    const rafId = window.requestAnimationFrame(revealIfVisible)

    if (!('IntersectionObserver' in window)) {
      reveal()
      return () => window.cancelAnimationFrame(rafId)
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          reveal()
          observer.disconnect()
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(el)
    window.addEventListener('hashchange', revealIfVisible)

    return () => {
      window.cancelAnimationFrame(rafId)
      window.removeEventListener('hashchange', revealIfVisible)
      observer.disconnect()
    }
  }, [threshold, rootMargin])

  return { ref, ready, visible }
}
