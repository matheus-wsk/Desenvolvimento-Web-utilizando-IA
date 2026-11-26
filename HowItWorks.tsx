import { MessageCircle, CalendarDays, MonitorSmartphone, Rocket } from 'lucide-react';

const STEPS = [
  {
    icon: MessageCircle,
    title: 'Primeiro contato',
    description:
      'Você manda uma mensagem no WhatsApp. Respondemos rápido, entendemos o que você busca e já respondemos às primeiras dúvidas.',
  },
  {
    icon: CalendarDays,
    title: 'Avaliação inicial',
    description:
      'Consulta presencial, sem compromisso: avaliamos seu sorriso, ouvimos suas expectativas e explicamos o que é possível com clareza.',
  },
  {
    icon: MonitorSmartphone,
    title: 'Plano visual do tratamento',
    description:
      'Com o escaneamento digital, montamos o planejamento visual do seu sorriso. Você vê o resultado esperado, os prazos e os valores.',
  },
  {
    icon: Rocket,
    title: 'Início do tratamento',
    description:
      'Só depois do seu “sim” é que qualquer procedimento começa. A partir daí, cada etapa acompanhada de perto pela mesma equipe.',
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="scroll-mt-24 bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-brand-700">
            Como funciona
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-sand-900 sm:text-4xl">
            Do “oi” no WhatsApp ao tratamento: 4 passos
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-sand-800">
            Um processo transparente, sem enrolação e no seu ritmo.
          </p>
        </div>

        <ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {STEPS.map((step, i) => (
            <li key={step.title} className="relative">
              {i < STEPS.length - 1 && (
                <span
                  className="absolute left-full top-7 hidden h-px w-8 translate-x-3 bg-brand-200 lg:block"
                  aria-hidden="true"
                />
              )}
              <div className="flex flex-col items-start">
                <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-600 text-white shadow-lg shadow-brand-600/25">
                  <step.icon className="h-7 w-7" aria-hidden="true" />
                  <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-accent-400 text-xs font-bold text-sand-900">
                    {i + 1}
                  </span>
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold text-sand-900">
                  {step.title}
                </h3>
                <p className="mt-3 leading-relaxed text-sand-800">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
