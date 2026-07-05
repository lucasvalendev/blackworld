import { GOOGLE_MAPS_URL, WHATSAPP_CTA_URL } from '@/lib/site'

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-6 px-4 py-12 text-center sm:px-6 lg:px-8">
        <p className="font-heading text-sm font-extrabold tracking-widest text-foreground">
          BARBEARIA <span className="text-primary">BLACK WORLD</span>
        </p>
        <p className="text-sm text-muted-foreground">Jacareí – SP</p>
        <nav aria-label="Links do rodapé" className="flex items-center gap-6">
          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            Google Maps
          </a>
          <a
            href={WHATSAPP_CTA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            WhatsApp
          </a>
        </nav>
        <p className="text-xs text-muted-foreground/70">
          © {new Date().getFullYear()} Barbearia Black World. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
