'use client'

import { useEffect, useState } from 'react'

const E = 'cubic-bezier(0.16, 1, 0.3, 1)'

interface PageRevealProps {
  children: React.ReactNode
  delay?: number
  distance?: number
  masked?: boolean
  className?: string
}

export default function PageReveal({
  children,
  delay = 0,
  distance = 24,
  masked = false,
  className = '',
}: PageRevealProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80)
    return () => clearTimeout(t)
  }, [])

  const style = {
    display: 'block',
    opacity: mounted ? 1 : 0,
    transform: mounted ? 'translateY(0)' : `translateY(${distance}px)`,
    transition: `opacity 0.85s ${E} ${delay}ms, transform 0.85s ${E} ${delay}ms`,
  }

  if (masked) {
    return (
      <span className={`block overflow-hidden ${className}`}>
        <span style={style}>{children}</span>
      </span>
    )
  }

  return (
    <div className={className} style={style}>
      {children}
    </div>
  )
}