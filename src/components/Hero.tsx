import { ArrowRight, MapPin, Truck, Globe } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hem" className="relative min-h-[92svh] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/jk-hero-v2.webp"
          alt="JK Projektlogistik utför specialtransport med svensk varningsbil"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/90 via-navy-950/75 to-navy-950/40" />
      </div>

      <div className="container-x relative z-10 pt-20">
        <div className="max-w-5xl">
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-brand-500/20 px-4 py-2 backdrop-blur-sm ring-1 ring-brand-400/40 animate-fade-in">
              <span className="h-2 w-2 rounded-full bg-brand-400 animate-pulse" />
              <span className="text-sm font-medium text-brand-200">Oberoende samarbetspartner</span>
            </div>

            <h1 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl animate-fade-in-up">
              Din partner inom{' '}
              <span className="text-brand-400">transport</span> och{' '}
              <span className="text-brand-400">projektlogistik</span>
            </h1>

            <p className="mt-6 text-lg text-navy-100 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              Vi verkar över hela Europa och säkerställer att era specialtransporter
              och projekt rullar på — från planering till leverans.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <a href="#kontakt" className="btn-primary">
                Få en offert
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#tjanster"
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/30 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10 active:scale-95"
              >
                Våra tjänster
              </a>
            </div>
          </div>

          <div
            className="mt-10 grid gap-4 animate-fade-in sm:grid-cols-2 lg:grid-cols-[max-content_minmax(0,1fr)_max-content] lg:gap-6"
            style={{ animationDelay: '0.4s' }}
          >
            <div className="flex items-center gap-3">
              <Globe className="h-6 w-6 text-brand-400" />
              <span className="text-sm text-navy-100">Hela Europa</span>
            </div>
            <div className="flex items-start gap-3">
              <Truck className="mt-0.5 h-6 w-6 shrink-0 text-brand-400" />
              <span className="text-sm leading-5 text-navy-100">
                Transporter, lyft och hantering, Följebil/VTL, simuleringar och dokumentation
              </span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-6 w-6 text-brand-400" />
              <span className="text-sm text-navy-100">Baserad i Åseda, Småland</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent z-10" />
    </section>
  );
}
