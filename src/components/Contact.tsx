import { useState, type FormEvent } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { supabase } from '@/lib/supabase';

const serviceOptions = [
  'Transport',
  'Transportplanering',
  'Tulltjänster',
  'Följebil',
  'Lastsäkringsintyg',
  'Tunga lyft',
  'Balkar',
  'Konsulttjänster',
];

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: (formData.get('phone') as string) || null,
      company: (formData.get('company') as string) || null,
      message: formData.get('message') as string,
      service_type: (formData.get('service_type') as string) || null,
    };

    const { error } = await supabase.from('contact_submissions').insert(data);

    if (error) {
      setStatus('error');
      setErrorMsg('Något gick fel. Försök igen eller kontakta oss direkt per telefon.');
      return;
    }

    setStatus('success');
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="kontakt" className="py-24 bg-navy-50">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-brand-600">
              Kontakt
            </span>
            <h2 className="section-title mt-3">
              Låt oss planera ert nästa projekt
            </h2>
            <p className="mt-4 text-lg text-navy-600">
              Behöver du hjälp med en specialtransport eller ett komplett
              projektlogistikuppdrag? Kontakta oss så återkommer vi snabbt.
            </p>

            <div className="mt-8 space-y-4">
              <a href="tel:047420433" className="flex items-center gap-4 group">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-500 group-hover:text-white">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-navy-500">Telefon</p>
                  <p className="font-semibold text-navy-950">0474-204 33</p>
                </div>
              </a>

              <a href="mailto:info@jkprojektlogistik.se" className="flex items-center gap-4 group">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-500 group-hover:text-white">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-navy-500">E-post</p>
                  <p className="font-semibold text-navy-950">info@jkprojektlogistik.se</p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-navy-500">Besöksadress</p>
                  <p className="font-semibold text-navy-950">Brinkagatan 5, 364 30 Åseda</p>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-xl border border-navy-200 bg-white p-5">
              <p className="text-sm font-semibold text-navy-950">Organisation</p>
              <p className="mt-1 text-sm text-navy-600">
                JK Projektlogistik AB · Org.nr 559579-4255 · Aktiebolag
              </p>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-8 shadow-xl">
            {status === 'success' ? (
              <div className="flex h-full flex-col items-center justify-center text-center py-12">
                <CheckCircle2 className="h-16 w-16 text-brand-500" />
                <h3 className="mt-4 font-display text-2xl font-bold text-navy-950">
                  Tack för ditt meddelande!
                </h3>
                <p className="mt-2 text-navy-600">
                  Vi återkommer till dig så snart som möjligt.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="btn-secondary mt-6"
                >
                  Skicka ett till meddelande
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-navy-700">
                      Namn *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="mt-1 w-full rounded-lg border border-navy-200 px-4 py-2.5 text-sm text-navy-950 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all"
                      placeholder="Ditt namn"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-navy-700">
                      E-post *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="mt-1 w-full rounded-lg border border-navy-200 px-4 py-2.5 text-sm text-navy-950 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all"
                      placeholder="namn@foretag.se"
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-navy-700">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="mt-1 w-full rounded-lg border border-navy-200 px-4 py-2.5 text-sm text-navy-950 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all"
                      placeholder="070-123 45 67"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-navy-700">
                      Företag
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="mt-1 w-full rounded-lg border border-navy-200 px-4 py-2.5 text-sm text-navy-950 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all"
                      placeholder="Företagsnamn"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service_type" className="block text-sm font-medium text-navy-700">
                    Tjänst
                  </label>
                  <select
                    id="service_type"
                    name="service_type"
                    className="mt-1 w-full rounded-lg border border-navy-200 px-4 py-2.5 text-sm text-navy-950 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all bg-white"
                  >
                    <option value="">Välj en tjänst (valfritt)</option>
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-navy-700">
                    Meddelande *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="mt-1 w-full rounded-lg border border-navy-200 px-4 py-2.5 text-sm text-navy-950 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all resize-none"
                    placeholder="Beskriv ert transport- eller projektbehov..."
                  />
                </div>

                {status === 'error' && (
                  <div className="flex items-center gap-2 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
                    <AlertCircle className="h-5 w-5 flex-shrink-0" />
                    {errorMsg}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn-primary w-full disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Skickar...
                    </>
                  ) : (
                    <>
                      Skicka meddelande
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
