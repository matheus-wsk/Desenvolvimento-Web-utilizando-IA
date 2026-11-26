import { ScanLine, Eye, Armchair, GraduationCap } from 'lucide-react';

const BENEFITS = [
  {
    icon: ScanLine,
    title: 'Adeus, moldagens',
    description:
      'Escaneamento digital em minutos, sem aquela massa desconfortável na boca. Mais preciso para o dentista, muito mais confortável para você.',
  },
  {
    icon: Eye,
    title: 'Você vê antes de decidir',
    description:
      'Planejamento visual do seu novo sorriso antes de qualquer procedimento. Nada começa sem que você aprove o resultado esperado.',
  },
  {
    icon: Armchair,
    title: 'Ambiente que acolhe',
    description:
      'Clima leve, atendimento no seu ritmo e uma equipe que explica cada etapa em linguagem simples. Ir ao dentista sem aquele frio na barriga.',
  },
  {
    icon: GraduationCap,
    title: 'Especialistas de verdade',
    description:
      'Cada fase do seu tratamento com profissionais focados nela: estética, reabilitação e acompanhamento. Experiência onde mais importa.',
  },
];

export default function Benefits() {
  return (
    <section id="beneficios" className="scroll-mt-24 bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-brand-700">
            Por que a Lumina
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-sand-900 sm:text-4xl">
            Tecnologia a serviço do seu conforto
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-sand-800">
            Um tratamento de sorriso deve ser tão tranquilo quanto o resultado é bonito.
            É assim que trabalhamos.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map((b) => (
            <article
              key={b.title}
              className="group rounded-2xl border border-sand-200 bg-sand-50 p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-300 hover:bg-brand-50/60 hover:shadow-xl hover:shadow-brand-900/5"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-600 text-white shadow-md shadow-brand-600/25 transition-transform duration-300 group-hover:scale-110">
                <b.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-display text-xl font-semibold text-sand-900">
                {b.title}
              </h3>
              <p className="mt-3 leading-relaxed text-sand-800">{b.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
