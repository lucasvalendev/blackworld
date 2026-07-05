'use client'

import { MapPin } from 'lucide-react'
import { useState } from 'react'
import { Reveal } from '@/components/reveal'
import { GOOGLE_MAPS_EMBED_URL, GOOGLE_MAPS_URL } from '@/lib/site'

export function Location() {
  const [loaded, setLoaded] = useState(false)

  return (
    <section id="localizacao" className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <Reveal>
        <h2 className="font-heading text-balance text-center text-3xl font-extrabold text-foreground sm:text-4xl">
          Onde Estamos
        </h2>
        <p className="mx-auto mt-3 flex max-w-md items-center justify-center gap-2 text-center text-sm leading-relaxed text-muted-foreground sm:text-base">
          <MapPin className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
          Jacareí – SP
        </p>
      </Reveal>

      <Reveal className="mt-10">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-card">
          {!loaded && (
            <div
              aria-hidden="true"
              className="absolute inset-0 flex items-center justify-center"
            >
              <span className="h-8 w-8 animate-spin rounded-full border-2 border-border border-t-primary" />
            </div>
          )}
          <iframe
            src={GOOGLE_MAPS_EMBED_URL}
            title="Mapa com a localização da Barbearia Black World em Jacareí"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            onLoad={() => setLoaded(true)}
            className={`h-80 w-full border-0 transition-opacity duration-700 sm:h-96 ${
              loaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
        </div>
        <div className="mt-6 flex justify-center">
          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-border bg-card px-6 text-sm font-semibold text-foreground transition-colors duration-300 hover:border-primary/40 hover:text-primary"
          >
            <MapPin className="h-4 w-4" aria-hidden="true" />
            Ver no Google Maps
          </a>
        </div>
      </Reveal>
    </section>
  )
}
