// Datos de la boda
export const wedding = {
  bride: 'Mariana',
  groom: 'Fernando',
  date: '2026-11-14T17:00:00',
  dateLabel: '14 de Noviembre, 2026',
  city: 'Veracruz, Ver.',
  rsvpDeadline: '10 de Noviembre, 2026',

  intro:
    'Tenemos el honor de invitarles a la celebración de nuestro matrimonio civil y religioso, y a compartir con nosotros el inicio de esta nueva etapa llena de amor, fe y esperanza.',

  closing:
    'Tu compañía hará que este día sea aún más especial. Será un honor celebrar juntos el inicio de nuestra nueva vida.',

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

  gallery: [
    { src: '/images/hero.jpg', alt: 'Momento de los novios' },
    { src: '/images/hero.jpg', alt: 'Los novios sonriendo' },
    { src: '/images/hero.jpg', alt: 'Los novios juntos' },
  ],
}

export type Wedding = typeof wedding
