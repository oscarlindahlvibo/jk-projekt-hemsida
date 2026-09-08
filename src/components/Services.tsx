import {
  Truck,
  Package,
  FileText,
  ClipboardCheck,
  ShieldCheck,
  Wrench,
  Map,
  Anchor,
} from 'lucide-react';

const services = [
  {
    icon: Truck,
    title: 'Transport',
    description: 'Förmedling av transporter och tunga lyft åt tillverkningsindustri och infrastrukturaktörer.',
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
    icon: Package,
    title: 'Följebil',
    description: 'Följebilar för säker transport av överseende och specialgods över hela Europa.',
  },
  {
    icon: ShieldCheck,
    title: 'Lastsäkringsintyg',
    description: 'Utfärdande av lastsäkringsintyg och kontroll av att lasten är säkrad enligt gällande regler.',
  },
  {
    icon: Wrench,
    title: 'Tunga lyft',
    description: 'Planering och genomförande av tunga lyft med specialiserad utrustning och erfaren personal.',
  },
  {
    icon: Anchor,
    title: 'Balkar',
    description: 'Transport och hantering av balkar och stålkonstruktioner för industri- och infrastrukturprojekt.',
  },
  {
    icon: ClipboardCheck,
    title: 'Konsulttjänster',
    description: 'Expertis inom projektlogistik och rådgivning för komplexa logistikuppgifter.',
  },
];

export default function Services() {
  return (
    <section id="tjanster" className="py-24 bg-white">
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
