'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import {
  Scissors,
  Sparkles,
  Layers,
  Paintbrush,
  Ruler,
  Eye,
  Droplets,
  FlaskConical,
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Reveal } from '@/components/reveal'

const services = [
  {
    icon: Scissors,
    name: 'Corte Masculino',
    description: 'Corte sob medida para o seu estilo, com acabamento impecável.',
  },
  {
    icon: Sparkles,
    name: 'Barba',
    description: 'Modelagem completa com toalha quente e produtos premium.',
  },
  {
    icon: Layers,
    name: 'Corte + Barba',
    description: 'A experiência completa: visual renovado da cabeça à barba.',
  },
  {
    icon: Paintbrush,
    name: 'Pigmentação',
    description: 'Realce e uniformidade para um visual mais marcante.',
  },
  {
    icon: Ruler,
    name: 'Acabamento',
    description: 'Contornos precisos para manter o corte sempre em dia.',
  },
  {
    icon: Eye,
    name: 'Sobrancelha',
    description: 'Alinhamento natural que valoriza a expressão.',
  },
  {
    icon: Droplets,
    name: 'Hidratação',
    description: 'Nutrição profunda para cabelos mais saudáveis e macios.',
  },
  {
    icon: FlaskConical,
    name: 'Tratamentos Capilares',
    description: 'Cuidados especializados para couro cabeludo e fios.',
  },
]

const pages = [services.slice(0, 4), services.slice(4, 8)]

function Carousel({ pages: pageData }: { pages: (typeof services)[] }) {
  const [activePage, setActivePage] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const scheduleNext = useCallback(
    (paused: boolean) => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
      if (!paused) {
        timeoutRef.current = setTimeout(() => {
          setActivePage((p) => (p + 1) % pageData.length)
        }, 5000)
      }
    },
    [pageData.length],
  )

  useEffect(() => {
    scheduleNext(isPaused)
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [activePage, isPaused, scheduleNext])

  const goTo = (index: number) => {
    setActivePage(index)
    setIsPaused(true)
    scheduleNext(true)
    setTimeout(() => setIsPaused(false), 8000)
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => {
        setTimeout(() => setIsPaused(false), 3000)
      }}
    >
      <div className="overflow-hidden">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={activePage}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            className="grid grid-cols-2 gap-3"
          >
            {pageData[activePage].map((service, i) => (
              <Reveal key={service.name} delay={i * 0.06}>
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-5 flex items-center justify-center gap-2">
        {pageData.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Ver serviços ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === activePage
                ? 'w-5 bg-primary'
                : 'w-1.5 bg-muted-foreground/25'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

function ServiceCard({ service }: { service: (typeof services)[number] }) {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      className="flex h-full flex-col gap-3 rounded-2xl border border-border bg-card p-5 transition-colors duration-300 hover:border-primary/25 sm:p-6"
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
        <service.icon className="h-5 w-5" aria-hidden="true" />
      </span>
      <h3 className="font-heading text-sm font-bold text-foreground sm:text-base">
        {service.name}
      </h3>
      <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
        {service.description}
      </p>
    </motion.div>
  )
}

export function Services() {
  return (
    <section
      id="servicos"
      className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8"
    >
      <Reveal>
        <h2 className="font-heading text-balance text-center text-3xl font-extrabold text-foreground sm:text-4xl">
          Nossos Serviços
        </h2>
        <p className="mx-auto mt-3 max-w-md text-center text-sm leading-relaxed text-muted-foreground sm:text-base">
          Cada detalhe pensado para você sair com a melhor versão do seu estilo.
        </p>
      </Reveal>

      {/* Desktop: all 8 cards in grid */}
      <div className="mt-12 hidden grid-cols-4 gap-4 lg:grid">
        {services.map((service, i) => (
          <Reveal key={service.name} delay={(i % 4) * 0.06}>
            <ServiceCard service={service} />
          </Reveal>
        ))}
      </div>

      {/* Mobile: carousel with 4 cards per page */}
      <div className="mt-12 lg:hidden">
        <Carousel pages={pages} />
      </div>
    </section>
  )
}
