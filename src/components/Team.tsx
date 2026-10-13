import { Mail, Phone, UserRound } from 'lucide-react';

const people = [
  {
    name: 'Jesper Karlsson',
    email: 'jesper@jkprojekt.se',
    image: '/jk-team-photo-1.webp',
    phones: [
      { label: 'Växel', display: '+46 (0)474 204 33', href: '+4647420433' },
      { label: 'Mobil', display: '+46 (0)72 163 12 45', href: '+46721631245' },
    ],
  },
  {
    name: 'Jenny Christensen',
    email: 'jenny@jkprojekt.se',
    image: '/jk-team-photo-2.webp',
    phones: [{ label: 'Mobil', display: '+46 (0)72 163 12 46', href: '+46721631246' }],
  },
  {
    name: 'Lucas Lundström',
    email: 'Lucas@jkprojekt.se',
    image: null as string | null,
    phones: [],
  },
];

export default function Team() {
  return (
    <div id="personal" className="mt-20 border-t border-navy-200 pt-12 scroll-mt-24">
      <h2 className="section-title">Möt oss på JK Projektlogistik</h2>
      <div className="mt-8 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {people.map((person) => (
          <article key={person.email} className="min-w-0">
            {person.image ? (
              <img
                src={person.image}
                alt={person.name}
                loading="lazy"
                width={800}
                height={800}
                className="aspect-square w-full rounded-lg object-cover"
              />
            ) : (
              <div
                role="img"
                aria-label={`Porträtt saknas för ${person.name}`}
                className="flex aspect-square w-full items-center justify-center rounded-lg bg-navy-100 text-navy-400"
              >
                <UserRound className="h-24 w-24" strokeWidth={1} aria-hidden="true" />
              </div>
            )}
            <h3 className="mt-5 font-display text-xl font-bold text-navy-950">{person.name}</h3>
            <ul className="mt-3 space-y-3 text-sm text-navy-700">
              {person.phones.map((phone) => (
                <li key={phone.href}>
                  <a href={`tel:${phone.href}`} className="inline-flex items-start gap-2 hover:text-brand-600">
                    <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" aria-hidden="true" />
                    <span>{phone.label}: {phone.display}</span>
                  </a>
                </li>
              ))}
              <li>
                <a href={`mailto:${person.email}`} className="inline-flex max-w-full items-start gap-2 hover:text-brand-600">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" aria-hidden="true" />
                  <span className="min-w-0 break-all">{person.email}</span>
                </a>
              </li>
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
}
