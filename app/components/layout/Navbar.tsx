'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Brands', href: '/brands' },
  { label: 'Sell your site', href: '/sell' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300 ${
        scrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Logo — swaps on scroll */}
        <Link href="/" className="flex-shrink-0 h-10 relative w-[160px]">
          <Image
            src="/logos/logo-default.png"
            alt="ClearWater Media Group"
            fill
            className={`object-contain object-left transition-opacity duration-300 ${
              scrolled ? 'opacity-0' : 'opacity-100'
            }`}
            priority
          />
          <Image
            src="/logos/logo-scroll.png"
            alt="ClearWater Media Group"
            fill
            className={`object-contain object-left transition-opacity duration-300 ${
              scrolled ? 'opacity-100' : 'opacity-0'
            }`}
          />
        </Link>

        {/* Nav Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-sm font-medium transition-colors duration-200 relative group ${
                    isActive ? 'text-[var(--yellow)]' : 'text-white/70 hover:text-white'
                  }`}
                >
                  {link.label}
                  {!isActive && (
                    <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300" />
                  )}
                </Link>
              </li>
            )
          })}
        </ul>

        {/* CTA — dark pill with arrow icon */}
        <Link
  href="/contact"
  className="flex items-center gap-3 bg-[#1c1c1c] border border-white/10 rounded-full px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#fbd305] hover:text-black hover:border-transparent transition-all duration-300 group"
>
  Contact Us
  <span className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center transition-all duration-300 group-hover:bg-black/20">
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path
        d="M2 7H12M12 7L7.5 2.5M12 7L7.5 11.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </span>
</Link>

      </nav>
    </header>
  )
}
