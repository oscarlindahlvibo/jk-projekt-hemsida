import { Truck, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-navy-200">
      <div className="container-x py-16">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br from-brand-500 to-brand-600">
                <Truck className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="font-display text-lg font-bold text-white">
                  JK Projektlogistik AB
                </p>
                <p className="text-sm text-brand-400">Åseda · Hela Europa</p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed">
              Din oberoende samarbetspartner inom transport och projektlogistik.
              Vi verkar över hela Europa och säkerställer att era specialtransporter
              och projekt rullar på.
            </p>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              Kontakt
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-brand-400" />
                <a href="tel:047420433" className="hover:text-white transition-colors">
                  0474-204 33
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-brand-400" />
                <a href="mailto:info@jkprojektlogistik.se" className="hover:text-white transition-colors">
                  info@jkprojektlogistik.se
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-brand-400" />
                <span>Brinkagatan 5, 364 30 Åseda</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              Tjänster
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#tjanster" className="hover:text-white transition-colors">Transport</a></li>
              <li><a href="#tjanster" className="hover:text-white transition-colors">Transportplanering</a></li>
              <li><a href="#tjanster" className="hover:text-white transition-colors">Tulltjänster</a></li>
              <li><a href="#tjanster" className="hover:text-white transition-colors">Följebil</a></li>
              <li><a href="#tjanster" className="hover:text-white transition-colors">Lastsäkringsintyg</a></li>
              <li><a href="#tjanster" className="hover:text-white transition-colors">Tunga lyft & balkar</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-navy-800 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-navy-400">
              © {new Date().getFullYear()} JK Projektlogistik AB · Org.nr 559579-4255
            </p>
            <p className="text-sm text-navy-400">
              Aktiebolag · Säte i Uppvidinge
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
