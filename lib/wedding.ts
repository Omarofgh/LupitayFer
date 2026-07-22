// Datos de la boda. Reemplaza los valores marcados con "// TODO" cuando los tengas.
export const wedding = {
  // Nombres de los novios
  bride: 'Mariana',
  groom: 'Fernando',
  // Fecha y hora de inicio (ceremonia religiosa). Formato ISO.
  date: '2026-11-14T17:00:00',
  dateLabel: '14 de Noviembre, 2026',
  city: 'Veracruz, Ver.',
  // Fecha límite para confirmar asistencia
  rsvpDeadline: '10 de Noviembre, 2026',

  // Texto principal de la invitación
  intro:
    'Tenemos el honor de invitarles a la celebración de nuestro matrimonio civil y religioso, y a compartir con nosotros el inicio de esta nueva etapa llena de amor, fe y esperanza.',

  // Mensaje de cierre
  closing:
    'Tu compañía hará que este día sea aún más especial. Será un honor celebrar juntos el inicio de nuestra nueva vida.',

  // Eventos y lugares
  events: [
    {
      label: 'Ceremonia Religiosa',
      venue: 'Iglesia La Divina Providencia',
      address: 'Veracruz, Ver.',
      schedule: [{ name: 'Ceremonia Religiosa', time: '5:00 p.m.' }],
      mapsQuery: 'Iglesia La Divina Providencia, Veracruz',
    },
    {
      label: 'Ceremonia Civil y Recepción',
      venue: 'Salón Royale',
      address: 'C. J. B. Lobos, Las Bajadas, 91726 Veracruz, Ver.',
      schedule: [
        { name: 'Ceremonia Civil', time: '7:30 p.m.' },
        { name: 'Recepción', time: '8:00 p.m.' },
      ],
      mapsQuery: 'Salon Royale, C. J. B. Lobos, Las Bajadas, 91726 Veracruz, Ver.',
    },
  ],

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
}

export type Wedding = typeof wedding
