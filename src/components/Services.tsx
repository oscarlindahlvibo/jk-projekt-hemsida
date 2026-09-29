import {
  Truck,
  FileText,
  ClipboardCheck,
  ShieldCheck,
  Map,
  Anchor,
  Plane,
  Siren,
  type LucideProps,
} from 'lucide-react';

function CraneHookIcon({ className, ...props }: LucideProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      {...props}
    >
      <path d="M4 5h11l4 4" />
      <path d="M7 5v14" />
      <path d="M4 19h6" />
      <path d="M15 5v7" />
      <path d="M15 12a3 3 0 1 0 3 3" />
    </svg>
  );
}

const services = [
  {
    icon: Truck,
    title: 'Transport',
    description: 'Specialtransporter, expresstransporter och traditionella transporter i hela Europa.',
  },
  {
    icon: Map,
    title: 'Transportplanering',
    description: 'Strategisk planering av komplexa transportrutter och projekt för optimal effektivitet.',
  },
  {
    icon: FileText,
    title: 'Tulltjänster',
    description: 'Hantering av tullklarering och dokumentation för gränsöverskridande transporter.',
  },
  {
    icon: Siren,
    title: 'Följebil',
    description: 'Följebils- och VTL-tjänster för säkra transporter samt kontroll av färdväg inför transporterna.',
  },
  {
    icon: ShieldCheck,
    title: 'Lastsäkringsintyg',
    description: 'Utfärdande av lastsäkringsintyg och kontroll av att lasten är säkrad enligt gällande regler.',
  },
  {
    icon: CraneHookIcon,
    title: 'Tunga lyft',
    description: 'Planering och genomförande av tunga lyft med specialiserad utrustning och erfaren personal.',
  },
  {
    icon: Anchor,
    secondaryIcon: Plane,
    title: 'Sjö- och flygtransport',
    description: 'Organiserar och samordnar sjö- och flygtransporter.',
  },
  {
    icon: ClipboardCheck,
    title: 'Konsulttjänster',
    description: 'Expertis inom projektlogistik och rådgivning för komplexa logistikuppgifter.',
  },
];

export default function Services() {
  return (
    <section id="tjanster" className="pt-8 pb-16 bg-white sm:py-24">
      <div className="container-x">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand-600">
            Våra tjänster
          </span>
          <h2 className="section-title mt-3">
            Skräddarsydda logistiklösningar
          </h2>
          <p className="mt-4 text-lg text-navy-600">
            Vi erbjuder en komplett portfölj av tjänster för att säkerställa att
            era transporter och projekt genomförs säkert, effektivt och i tid.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <div
              key={i}
              className="group relative rounded-2xl border border-navy-100 bg-white p-6 shadow-sm transition-all hover:border-brand-300 hover:shadow-xl hover:shadow-brand-500/10 hover:-translate-y-1"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-500 group-hover:text-white">
                <service.icon className="h-6 w-6" />
                {'secondaryIcon' in service && service.secondaryIcon ? (
                  <service.secondaryIcon className="-ml-1 h-5 w-5" />
                ) : null}
              </div>
              <h3 className="font-display text-lg font-bold text-navy-950">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-navy-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
