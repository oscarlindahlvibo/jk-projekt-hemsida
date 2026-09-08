import { TrendingUp, Layers, Building2, HardHat, Globe2 } from 'lucide-react';

const stats = [
  { icon: TrendingUp, value: '100%', label: 'Kundnöjdhet i fokus' },
  { icon: Globe2, value: 'Europa', label: 'Verksamhetsområde' },
  { icon: Building2, value: 'Industri', label: 'Tillverkningskunder' },
  { icon: HardHat, value: 'Infrastruktur', label: 'Projektuppdrag' },
];

const projects = [
  {
    title: 'Specialtransport för industri',
    description:
      'Transportplanering, transport, tulltjänster, följebil, lastsäkringsintyg och balkar för ett större industriprojekt.',
    tags: ['Transport', 'Tulltjänster', 'Följebil', 'Lastsäkring'],
  },
  {
    title: 'Infrastrukturprojekt',
    description:
      'Komplett projektlogistik för infrastrukturaktörer — från tunga lyft till konsulttjänster och transportförmedling.',
    tags: ['Tunga lyft', 'Konsulttjänster', 'Transportförmedling'],
  },
];

export default function Projects() {
  return (
    <section id="projekt" className="py-24 bg-white">
      <div className="container-x">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand-600">
            Projekt
          </span>
          <h2 className="section-title mt-3">Vad vi har genomfört</h2>
          <p className="mt-4 text-lg text-navy-600">
            I våra projekt har vi tillhandahållit tjänster som transportplanering,
            transport, tulltjänster, följebil, lastsäkringsintyg och balkar.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 mb-16">
          {projects.map((project, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-2xl border border-navy-100 bg-gradient-to-br from-navy-50 to-white p-8 shadow-sm transition-all hover:shadow-xl hover:shadow-brand-500/10"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900 text-brand-400">
                <Layers className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-bold text-navy-950">
                {project.title}
              </h3>
              <p className="mt-3 text-sm text-navy-600 leading-relaxed">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag, j) => (
                  <span
                    key={j}
                    className="rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="grid gap-6 rounded-2xl bg-navy-950 p-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <stat.icon className="mx-auto h-8 w-8 text-brand-400" />
              <p className="mt-3 font-display text-2xl font-bold text-white">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-navy-200">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
