'use client'

import { Award, CalendarCheck, Scissors, UserCheck } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const stats = [
  {
    icon: UserCheck,
    title: 'Atendimento personalizado',
    description: 'Cada cliente é único',
  },
  {
    icon: Scissors,
    title: 'Profissionais especializados',
    description: 'Técnica e precisão',
  },
  {
    icon: Award,
    title: 'Padrão premium',
    description: 'Produtos e ambiente de alto nível',
  },
  {
    icon: CalendarCheck,
    title: 'Agendamento fácil',
    description: 'Direto pelo WhatsApp',
  },
]

export function Stats() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <Reveal>
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.title}
              className="flex flex-col items-center gap-2 bg-card px-4 py-8 text-center"
            >
              <stat.icon className="h-5 w-5 text-primary" aria-hidden="true" />
              <p className="font-heading text-sm font-bold text-foreground sm:text-base">
                {stat.title}
              </p>
              <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
