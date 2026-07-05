'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'
import { WHATSAPP_HERO_URL } from '@/lib/site'

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [0, 48])

  return (
    <section id="inicio" ref={ref} className="relative flex min-h-svh items-end overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 -bottom-16">
        <Image
          src="/images/hero.png"
          alt="Barbeiro da Barbearia Black World sentado na cadeira de barbeiro em um ambiente premium"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[38%_20%] sm:object-[center_25%]"
        />
      </motion.div>
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/20"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-transparent"
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-20 pt-32 sm:px-6 sm:pb-24 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 55, damping: 16, delay: 0.15 }}
          className="max-w-2xl"
        >
          <span className="mb-5 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold tracking-[0.25em] text-primary">
            ESTILO QUE IMPÕE
          </span>
          <h1 className="font-heading text-balance text-4xl font-extrabold leading-tight text-foreground sm:text-5xl lg:text-6xl">
            Mais que um corte.
            <br />
            <span className="text-primary">É sobre presença.</span>
          </h1>
          <p className="mt-5 max-w-lg text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Barbearia premium em Jacareí com atendimento personalizado e foco na melhor
            experiência.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={WHATSAPP_HERO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-sm font-bold tracking-wide text-primary-foreground shadow-[0_8px_30px_rgba(212,175,55,0.25)] transition-all duration-300 hover:brightness-110 sm:h-13"
            >
              Agendar pelo WhatsApp
            </a>
            <a
              href="#servicos"
              className="inline-flex h-12 items-center justify-center rounded-full border border-border bg-background/40 px-8 text-sm font-semibold text-foreground backdrop-blur-sm transition-colors duration-300 hover:border-primary/40 hover:text-primary sm:h-13"
            >
              Ver Serviços
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
