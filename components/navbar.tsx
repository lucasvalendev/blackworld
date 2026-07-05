'use client'

import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { useState } from 'react'
import { WHATSAPP_HERO_URL } from '@/lib/site'

export function Navbar() {
  const { scrollY } = useScroll()
  const [scrolled, setScrolled] = useState(false)

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 24)
  })

  return (
    <motion.header
      initial={{ y: -48, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 70, damping: 18 }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-background/80 shadow-[0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur-xl'
          : 'bg-background/40 backdrop-blur-md'
      }`}
    >
      <nav
        aria-label="Principal"
        className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8"
      >
        <a
          href="#inicio"
          className="font-heading text-sm font-extrabold tracking-widest text-foreground sm:text-base"
        >
          BARBEARIA <span className="text-primary">BLACK WORLD</span>
        </a>
        <a
          href={WHATSAPP_HERO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-9 items-center justify-center rounded-full bg-primary px-4 text-xs font-semibold tracking-wide text-primary-foreground transition-all duration-300 hover:brightness-110 sm:h-10 sm:px-5 sm:text-sm"
        >
          Agendar Horário
        </a>
      </nav>
    </motion.header>
  )
}
