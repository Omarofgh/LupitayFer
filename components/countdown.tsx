'use client'

import { useEffect, useState } from 'react'

function getRemaining(target: number) {
  const diff = Math.max(0, target - Date.now())
  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((diff / (1000 * 60)) % 60)
  const seconds = Math.floor((diff / 1000) % 60)
  return { days, hours, minutes, seconds }
}

export function Countdown({ date }: { date: string }) {
  const target = new Date(date).getTime()
  const [time, setTime] = useState(() => getRemaining(target))

  useEffect(() => {
    const id = setInterval(() => setTime(getRemaining(target)), 1000)
    return () => clearInterval(id)
  }, [target])

  const units = [
    { label: 'Días', value: time.days },
    { label: 'Horas', value: time.hours },
    { label: 'Minutos', value: time.minutes },
    { label: 'Segundos', value: time.seconds },
  ]

  return (
    <div className="flex items-start justify-center gap-6 sm:gap-12">
      {units.map((unit) => (
        <div key={unit.label} className="flex flex-col items-center">
          <span className="font-serif text-4xl font-light tabular-nums sm:text-6xl">
            {String(unit.value).padStart(2, '0')}
          </span>
          <span className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  )
}
