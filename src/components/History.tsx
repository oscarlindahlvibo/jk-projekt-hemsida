const milestones = [
  { date: 'Maj 2026', title: 'Bolaget grundas', text: 'Jesper Karlsson startar JK Projektlogistik AB.' },
  { date: 'Juli 2026', title: 'Första anställningen', text: 'Jenny ansluter och tar ansvar för administrationen.' },
  { date: 'September 2026', title: 'Teamet växer', text: 'Lucas ansluter med fokus på färdvägsrekognosering, följebil och VTL.' },
];

export default function History() {
  return (
    <section id="historia" className="py-24 bg-navy-50">
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand-600">
            Vår historia
          </span>
          <h2 className="section-title mt-3">Ett ungt bolag med lång branscherfarenhet</h2>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {milestones.map((m) => (
            <div key={m.date} className="rounded-xl border-t-4 border-brand-500 bg-white p-6 shadow-sm">
              <p className="font-display text-sm font-bold uppercase tracking-wider text-brand-600">
                {m.date}
              </p>
              <h3 className="mt-2 font-display text-lg font-bold text-navy-950">{m.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-navy-600">{m.text}</p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-3xl space-y-5 text-lg leading-relaxed text-navy-600">
          <p>
            JK Projektlogistik AB grundades i maj 2026 av Jesper Karlsson, med tolv års
            erfarenhet från transport- och logistikbranschen. Under åren har Jesper haft
            roller som chaufför, trafikledare, verksamhetschef och avdelningschef, vilket
            har gett en bred förståelse för såväl den operativa verksamheten som
            projektledning och affärsutveckling.
          </p>
          <p>
            Redan från starten fick bolaget en positiv utveckling. Flera tidigare
            samarbetspartners och nya kunder valde att anlita JK Projektlogistik, vilket
            resulterade i nya uppdrag och långsiktiga avtal.
          </p>
          <p>
            I juli 2026 tog bolaget nästa steg genom sin första anställning. Jenny blev en
            del av teamet och ansvarar idag för den administrativa verksamheten, med fokus
            på bland annat orderhantering, bokningar, trafikledning och övriga
            administrativa uppgifter kopplade till våra transport- och logistikuppdrag.
          </p>
          <p>
            Under september 2026 förstärktes organisationen ytterligare genom att Lucas
            anslöt till bolaget. Lucas ansvarar bland annat för färdvägsrekognosering samt
            följebil- och VTL-uppdrag. Han arbetar även ute i fält, där han tar emot,
            samordnar och hanterar våra kunders gods i samband med olika projekt.
          </p>
          <p>
            Trots att JK Projektlogistik är ett ungt företag bygger verksamheten på lång
            branscherfarenhet, ett starkt engagemang och en ambition att leverera
            genomtänkta och kostnadseffektiva logistiklösningar. Med en flexibel
            organisation och nära kontakt med våra kunder arbetar vi för att vara en trygg
            partner genom hela projektet – från planering och tillstånd till genomförande
            och leverans.
          </p>
        </div>
      </div>
    </section>
  );
}
