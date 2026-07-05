'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'
import { Reveal } from '@/components/reveal'

const images = [
  { src: '/images/corte-1.png', alt: 'Corte low fade com acabamento preciso' },
  { src: '/images/corte-2.png', alt: 'Barba modelada com skin fade' },
  { src: '/images/corte-3.png', alt: 'Corte crespo com mid fade e cachos definidos' },
  { src: '/images/corte-4.png', alt: 'Detalhe de risco desenhado na navalha' },
  { src: '/images/corte-5.png', alt: 'Corte texturizado com high fade' },
  { src: '/images/corte-6.png', alt: 'Corte clássico com barba alinhada' },
]

export function Gallery() {
  const [selected, setSelected] = useState<number | null>(null)

  const close = useCallback(() => setSelected(null), [])

  useEffect(() => {
    if (selected === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [selected, close])

  return (
    <section id="galeria" className="w-full py-4 sm:py-8">
      <Reveal className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-balance text-3xl font-extrabold text-foreground sm:text-4xl">
          Trabalhos Recentes
        </h2>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
          Cortes realizados na Black World. Arraste para o lado para ver mais.
        </p>
      </Reveal>

      <Reveal>
        <div className="scrollbar-hide mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-4 pb-4 sm:px-6 lg:px-8">
          {images.map((image, i) => (
            <motion.button
              key={image.src}
              type="button"
              onClick={() => setSelected(i)}
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 200, damping: 22 }}
              className="group relative h-72 w-56 shrink-0 snap-start overflow-hidden rounded-2xl border border-border sm:h-80 sm:w-64"
              aria-label={`Ampliar foto: ${image.alt}`}
            >
              <Image
                src={image.src || '/placeholder.svg'}
                alt={image.alt}
                fill
                loading="lazy"
                sizes="(max-width: 640px) 224px, 256px"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-30"
              />
            </motion.button>
          ))}
        </div>
      </Reveal>

      <AnimatePresence>
        {selected !== null && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={images[selected].alt}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-background/90 p-4 backdrop-blur-md"
            onClick={close}
          >
            <button
              type="button"
              onClick={close}
              aria-label="Fechar"
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:text-primary"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
            <motion.div
              initial={{ scale: 0.95, y: 12 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.97, y: 8 }}
              transition={{ type: 'spring', stiffness: 120, damping: 18 }}
              className="relative aspect-[3/4] w-full max-w-md overflow-hidden rounded-2xl border border-border"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[selected].src || '/placeholder.svg'}
                alt={images[selected].alt}
                fill
                sizes="(max-width: 640px) 100vw, 448px"
                className="object-cover"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
