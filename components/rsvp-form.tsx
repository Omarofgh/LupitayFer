'use client'

import { useState, type FormEvent } from 'react'
import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function RsvpForm({ deadline }: { deadline: string }) {
  const [submitted, setSubmitted] = useState(false)
  const [attending, setAttending] = useState<'yes' | 'no'>('yes')

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // El formulario aún no guarda los datos. Cuando conectemos una base de datos,
    // aquí se enviará la confirmación.
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="mx-auto flex max-w-md flex-col items-center gap-4 py-8 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground">
          <Check className="h-6 w-6" strokeWidth={1.5} />
        </span>
        <h3 className="font-serif text-2xl font-light">¡Gracias por confirmar!</h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {attending === 'yes'
            ? 'Nos hace muy felices que nos acompañes. Pronto tendrás más detalles.'
            : 'Lamentamos que no puedas acompañarnos. Gracias por avisarnos.'}
        </p>
      </div>
    )
  }

  const fieldClass =
    'w-full border-0 border-b border-border bg-transparent px-0 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary'

  return (
    <form onSubmit={handleSubmit} className="mx-auto flex max-w-md flex-col gap-6">
      <div className="flex flex-col gap-1">
        <label htmlFor="name" className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Nombre completo
        </label>
        <input id="name" name="name" required placeholder="Tu nombre" className={fieldClass} />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="guests" className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Número de invitados
        </label>
        <input
          id="guests"
          name="guests"
          type="number"
          min={1}
          max={10}
          defaultValue={1}
          className={fieldClass}
        />
      </div>

      <fieldset className="flex flex-col gap-3">
        <legend className="mb-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
          ¿Podrás acompañarnos?
        </legend>
        <div className="flex gap-3">
          {(
            [
              { value: 'yes', label: 'Sí, ahí estaré' },
              { value: 'no', label: 'No podré asistir' },
            ] as const
          ).map((option) => (
            <button
              type="button"
              key={option.value}
              onClick={() => setAttending(option.value)}
              className={`flex-1 rounded-md border px-4 py-3 text-sm transition-colors ${
                attending === option.value
                  ? 'border-primary bg-primary text-primary-foreground'
                  : 'border-border text-foreground hover:border-primary'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </fieldset>

      <div className="flex flex-col gap-1">
        <label htmlFor="message" className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Mensaje para los novios (opcional)
        </label>
        <textarea id="message" name="message" rows={3} placeholder="Escribe algo bonito…" className={fieldClass} />
      </div>

      <Button type="submit" size="lg" className="mt-2 w-full rounded-md tracking-wide">
        Confirmar asistencia
      </Button>
      <p className="text-center text-xs text-muted-foreground">
        Por favor confirma antes del {deadline}.
      </p>
    </form>
  )
}
