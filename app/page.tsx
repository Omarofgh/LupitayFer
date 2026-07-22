import Image from 'next/image'
import { MapPin, Clock, Heart } from 'lucide-react'
import { wedding } from '@/lib/wedding'
import { Countdown } from '@/components/countdown'
import { RsvpForm } from '@/components/rsvp-form'
import { IntroVideo } from '@/components/intro-video'
import { buttonVariants } from '@/components/ui/button'

function mapsEmbed(query: string) {
  return `https://maps.google.com/maps?q=${encodeURIComponent(query)}&output=embed`
}

function mapsLink(query: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`
}

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <IntroVideo />

      {/* Hero */}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
        <Image
          src="/images/hero.jpg"
          alt="Los novios abrazados en el parque"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-background/55" />
        <div className="relative z-10 mx-auto flex w-full max-w-sm flex-col items-center px-6 text-center sm:max-w-none">
          <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
            Nos casamos
          </p>
          <h1 className="mt-6 font-serif text-5xl font-light leading-tight tracking-tight text-center sm:text-8xl">
  <span className="block">{wedding.bride}</span>
  <span className="block italic text-primary my-2">&</span>
  <span className="block">{wedding.groom}</span>
</h1>
<div className="mt-8 flex items-center gap-4 text-sm uppercase tracking-[0.25em] text-foreground/80">
  <span>{wedding.dateLabel}</span>
  <span className="h-4 w-px bg-foreground/30" />
  <span>{wedding.city}</span>
</div>
        </div>
        <span className="absolute bottom-8 z-10 text-xs uppercase tracking-[0.3em] text-muted-foreground">
          Desliza
        </span>
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-2xl px-6 py-24 text-center sm:py-32">
        <Heart className="mx-auto mb-8 h-6 w-6 text-primary" strokeWidth={1} />
        <p className="font-serif text-2xl font-light leading-relaxed text-pretty sm:text-3xl">
          {wedding.intro}
        </p>
      </section>

      {/* Countdown */}
      <section className="border-y border-border bg-secondary px-6 py-20">
        <p className="mb-10 text-center text-xs uppercase tracking-[0.3em] text-muted-foreground">
          Faltan
        </p>
        <Countdown date={wedding.date} />
      </section>

      {/* Details / Location */}
      <section className="mx-auto max-w-5xl px-6 py-24 sm:py-32">
        <div className="mb-16 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Cuándo y dónde</p>
          <h2 className="mt-4 font-serif text-4xl font-light sm:text-5xl">Los detalles</h2>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          {wedding.events.map((place) => (
            <div key={place.venue} className="flex flex-col">
              <p className="text-xs uppercase tracking-[0.3em] text-primary">
                {place.label}
              </p>
              <h3 className="mt-3 font-serif text-2xl font-light">{place.venue}</h3>
              <div className="mt-4 flex flex-col gap-2 text-sm text-muted-foreground">
                {place.schedule.map((item) => (
                  <span key={item.name} className="flex items-center gap-2">
                    <Clock className="h-4 w-4 shrink-0" strokeWidth={1.5} />
                    <span className="text-foreground/80">{item.name}:</span> {item.time}
                  </span>
                ))}
                <span className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={1.5} />
                  {place.address}
                </span>
              </div>
              <div className="mt-6 aspect-[4/3] overflow-hidden rounded-lg border border-border">
                <iframe
                  title={`Mapa de ${place.venue}`}
                  src={mapsEmbed(place.mapsQuery)}
                  className="h-full w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <a
                href={mapsLink(place.mapsQuery)}
                target="_blank"
                rel="noreferrer"
                className={buttonVariants({
                  variant: 'outline',
                  size: 'lg',
                  className: 'mt-4 rounded-md tracking-wide',
                })}
              >
                Cómo llegar
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-secondary px-6 py-24 sm:py-32">
        <div className="mb-16 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Momentos</p>
          <h2 className="mt-4 font-serif text-4xl font-light sm:text-5xl">Nuestra historia</h2>
        </div>
        <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-3">
          {wedding.gallery.map((photo, i) => (
            <div
              key={photo.src}
              className={`relative overflow-hidden rounded-lg ${
                i === 0 ? 'sm:row-span-2 sm:aspect-[3/4]' : 'aspect-square'
              }`}
            >
              <Image
                src={photo.src || '/placeholder.svg'}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </section>

      {/* RSVP */}
      <section className="mx-auto max-w-2xl px-6 py-24 sm:py-32">
        <div className="mb-12 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Confirma tu asistencia</p>
          <h2 className="mt-4 font-serif text-4xl font-light sm:text-5xl">¿Nos acompañas?</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Tu presencia es el mejor regalo. Por favor confirma antes del{' '}
            {wedding.rsvpDeadline}.
          </p>
        </div>
        <RsvpForm deadline={wedding.rsvpDeadline} />
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-6 py-16 text-center">
        <h2 className="font-serif text-4xl font-light">
          {wedding.bride}
          <span className="mx-2 italic text-primary">&</span>
          {wedding.groom}
        </h2>
        <p className="mt-4 text-xs uppercase tracking-[0.3em] text-muted-foreground">
          {wedding.dateLabel} · {wedding.city}
        </p>
        <p className="mx-auto mt-8 max-w-md text-sm leading-relaxed text-pretty text-muted-foreground">
          {wedding.closing}
        </p>
      </footer>
    </main>
  )
}
