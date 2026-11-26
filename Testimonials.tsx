import { Quote, Star } from 'lucide-react';

const TESTIMONIALS = [
  {
    name: 'Fernanda Lima',
    profile: '35 anos · Publicitária',
    treatment: 'Lentes de contato em resina',
    quote:
      'Eu tinha vergonha de sorrir em fotos. Vi o resultado simulado no computador antes de começar e saí do primeiro mês de tratamento já me sentindo outra pessoa. Ninguém percebeu que "fiz" — só elogiam meu sorriso.',
  },
  {
    name: 'Ricardo Menezes',
    profile: '48 anos · Empresário',
    treatment: 'Implante e reabilitação oral',
    quote:
      'Havia adiado por anos por medo da cadeira. O escaneamento sem moldagem e a equipe explicando cada passo me deixaram tranquilo. Hoje como de tudo sem pensar duas vezes. Devia ter feito antes.',
  },
  {
    name: 'Camila Torres',
    profile: '28 anos · Advogada',
    treatment: 'Alinhadores + clareamento',
    quote:
      'O que me convenceu foi o planejamento visual: enxerguei o caminho inteiro antes de começar, com prazo e valor claros desde a avaliação inicial. O resultado ficou exatamente como o combinado.',
  },
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="scroll-mt-24 bg-sand-100 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-brand-700">
            Quem já sorriu com a gente
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-sand-900 sm:text-4xl">
            Histórias com começo, meio e sorriso
          </h2>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-2xl bg-white p-8 shadow-sm ring-1 ring-sand-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-sand-900/5"
            >
              <Quote className="h-8 w-8 text-brand-300" aria-hidden="true" />
              <div className="mt-4 flex gap-0.5" aria-label="Avaliação: 5 de 5 estrelas">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent-500 text-accent-500" aria-hidden="true" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 leading-relaxed text-sand-800">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 border-t border-sand-200 pt-5">
                <p className="font-semibold text-sand-900">{t.name}</p>
                <p className="mt-0.5 text-sm text-sand-700">{t.profile}</p>
                <p className="mt-2 inline-flex rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-800">
                  {t.treatment}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-xl text-center text-sm leading-relaxed text-sand-700">
          Depoimentos ilustrativos, criados para este projeto de portfólio. Nomes e situações são
          fictícios e não representam pacientes reais.
        </p>
      </div>
    </section>
  );
}
