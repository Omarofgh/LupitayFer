'use client'

import { useState, type FormEvent } from 'react'
import { Button } from '@/components/ui/button'

export function RsvpForm({ deadline }: { deadline: string }) {
  const [name, setName] = useState('')
  const [guests, setGuests] = useState('1')
  const [attending, setAttending] = useState<'yes' | 'no'>('yes')
  const [message, setMessage] = useState('')

  // Número de WhatsApp configurado con la clave de país de México (+52 1 229 420 9150)
  const PHONE_NUMBER = '5212294209150' 

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const attendanceText = attending === 'yes' ? 'Sí asistiré' : 'No podré asistir'
    
    // Texto formateado que se enviará por WhatsApp
    let whatsappMessage = `¡Hola! Confirmo mi asistencia para la boda:\n\n`
    whatsappMessage += `👤 *Nombre:* ${name}\n`
    whatsappMessage += `👥 *Número de invitados:* ${guests}\n`
    whatsappMessage += `✨ *¿Asistirá?:* ${attendanceText}\n`

    if (message.trim()) {
      whatsappMessage += `💬 *Mensaje:* ${message}\n`
    }

    // Genera el enlace de WhatsApp
    const encodedMessage = encodeURIComponent(whatsappMessage)
    const whatsappUrl = `https://wa.me/${PHONE_NUMBER}?text=${encodedMessage}`

    // Abre WhatsApp en una pestaña nueva o en la App del celular
    window.open(whatsappUrl, '_blank')
  }

  const fieldClass =
    'w-full border-0 border-b border-border bg-transparent px-0 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary'

  return (
    <form onSubmit={handleSubmit} className="mx-auto flex max-w-md flex-col gap-6">
      <div className="flex flex-col gap-1">
        <label htmlFor="name" className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Nombre completo
        </label>
        <input
          id="name"
          name="name"
          required
          placeholder="Tu nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={fieldClass}
        />
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
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
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
        <textarea
          id="message"
          name="message"
          rows={3}
          placeholder="Escribe algo bonito…"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={fieldClass}
        />
      </div>

      <Button type="submit" size="lg" className="mt-2 w-full rounded-md tracking-wide">
        Confirmar por WhatsApp
      </Button>
      <p className="text-center text-xs text-muted-foreground">
        Por favor confirma antes del {deadline}.
      </p>
    </form>
  )
}
