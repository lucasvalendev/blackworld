'use client'

import { Reveal } from '@/components/reveal'
import { WHATSAPP_CTA_URL } from '@/lib/site'

export function FinalCta() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-secondary px-6 py-16 text-center sm:px-12 sm:py-20">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"
          />
          <h2 className="font-heading mx-auto max-w-2xl text-balance text-3xl font-extrabold text-foreground sm:text-4xl lg:text-5xl">
            Seu próximo corte começa aqui.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
            Agende agora mesmo e tenha uma experiência premium desde o primeiro atendimento.
          </p>
          <a
            href={WHATSAPP_CTA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex h-13 items-center justify-center rounded-full bg-primary px-10 text-sm font-bold tracking-wide text-primary-foreground shadow-[0_8px_30px_rgba(212,175,55,0.25)] transition-all duration-300 hover:brightness-110 sm:h-14 sm:text-base"
          >
            Agendar pelo WhatsApp
          </a>
        </div>
      </Reveal>
    </section>
  )
}
