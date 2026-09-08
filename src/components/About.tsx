import { CheckCircle2, Target, Eye, Users } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Vårt uppdrag',
    text: 'Att vara din oberoende samarbetspartner och säkerställa att era specialtransporter och projekt rullar på — oavsett komplexitet.',
  },
  {
    icon: Eye,
    title: 'Vår vision',
    text: 'Att vara den mest pålitliga aktören inom projektlogistik i Norden, känd för kvalitet, säkerhet och kundfokus.',
  },
  {
    icon: Users,
    title: 'Våra värderingar',
    text: 'Säkerhet, punktlighet och transparens. Vi bygger långsiktiga relationer baserade på förtroende.',
  },
];

const points = [
  'Förmedling av transporter',
  'Tunga lyft',
  'Konsulttjänster åt tillverkningsindustri',
  'Aktörer inom infrastruktur',
  'Specialtransporter i hela Europa',
  'Lastsäkring och intyg',
];

export default function About() {
  return (
    <section id="om-oss" className="py-24 bg-navy-50">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative">
            <div className="overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="/jk-about.webp"
                alt="Logistikkoordinator planerar transporter"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden rounded-2xl bg-brand-500 p-6 shadow-xl lg:block">
              <p className="font-display text-3xl font-bold text-white">2026</p>
              <p className="text-sm text-brand-100">Registrerat bolag</p>
            </div>
          </div>

          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-brand-600">
              Om oss
            </span>
            <h2 className="section-title mt-3">
              Oberoende samarbetspartner inom transport och projektlogistik
            </h2>
            <p className="mt-4 text-lg text-navy-600 leading-relaxed">
              JK Projektlogistik AB är baserat i Åseda och verkar över hela Europa.
              Bolaget ägnar sig åt förmedling av transporter, tunga lyft och
              konsulttjänster åt tillverkningsindustri och aktörer inom infrastruktur.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {points.map((point, i) => (
                <div key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-500" />
                  <span className="text-sm text-navy-700">{point}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {values.map((value, i) => (
                <div key={i} className="rounded-xl bg-white p-4 shadow-sm">
                  <value.icon className="h-6 w-6 text-brand-500" />
                  <h3 className="mt-2 font-display text-sm font-bold text-navy-950">
                    {value.title}
                  </h3>
                  <p className="mt-1 text-xs text-navy-600 leading-relaxed">
                    {value.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
