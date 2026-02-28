'use client'

import useInView from '../../hooks/UseInView'

const E = 'cubic-bezier(0.16, 1, 0.3, 1)'

interface ScrollRevealProps {
  children: React.ReactNode
  delay?: number          // stagger delay in ms
  distance?: number       // px to travel (default 24)
  direction?: 'up' | 'left' | 'right'
  scale?: boolean         // adds scale(0.96) → scale(1)
  threshold?: number      // how much of element must be visible (0–1)
  className?: string
}

export default function ScrollReveal({
  children,
  delay = 0,
  distance = 24,
  direction = 'up',
  scale = false,
  threshold = 0.2,
  className = '',
}: ScrollRevealProps) {
  const { ref, inView } = useInView(threshold)

  const translate =
    direction === 'up' ? `translateY(${distance}px)` :
    direction === 'left' ? `translateX(-${distance}px)` :
    `translateX(${distance}px)`

  const scaleFrom = scale ? ' scale(0.96)' : ''
  const scaleTo = scale ? ' scale(1)' : ''

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? `translateY(0) translateX(0)${scaleTo}` : `${translate}${scaleFrom}`,
        transition: `opacity 0.9s ${E} ${delay}ms, transform 0.9s ${E} ${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}