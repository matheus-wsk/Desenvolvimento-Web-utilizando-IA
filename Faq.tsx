import { useState } from 'react';
import { ChevronDown, MessageCircle } from 'lucide-react';
import { whatsappLink } from '@/lib/site';

const FAQS = [
  {
    question: 'Vai doer?',
    answer:
      'Os procedimentos são feitos com anestesia local e técnicas minimamente invasivas. A grande maioria dos pacientes relata apenas uma leve sensibilidade nos primeiros dias — e a equipe acompanha você de perto para garantir conforto em todas as etapas.',
  },
  {
    question: 'Como funciona a avaliação inicial?',
    answer:
      'É uma consulta presencial, sem compromisso, em que avaliamos seu sorriso, ouvimos suas expectativas e explicamos as opções possíveis. Você sai dela entendendo o que pode ser feito, mesmo que decida não começar agora.',
  },
  {
    question: 'Quanto tempo dura o tratamento?',
    answer:
      'Depende do que você escolhe: clareamento pode levar de uma a poucas sessões; lentes e alinhadores, de algumas semanas a alguns meses; implantes, um pouco mais. Na avaliação, você recebe um prazo realista para o seu caso — sem promessas vagas.',
  },
  {
    question: 'Posso parcelar? Quanto custa?',
    answer:
      'Sim, trabalhamos com parcelamento facilitado e planos adaptados a cada tratamento. Na avaliação inicial, você recebe o valor completo e as condições por escrito, antes de decidir qualquer coisa.',
  },
  {
    question: 'Nunca fiz tratamento estético. Por onde começo?',
    answer:
      'Pelo mesmo lugar que todo mundo: uma conversa. Mande uma mensagem no WhatsApp, agende a avaliação e tire todas as dúvidas com calma. Não é preciso saber o que quer — a gente ajuda a descobrir junto.',
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-24 bg-sand-100 py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-5 lg:px-8">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-brand-700">
            Dúvidas frequentes
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-sand-900 sm:text-4xl">
            O que todo mundo pergunta antes de começar
          </h2>
        </div>

        <div className="mt-12 space-y-4">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={faq.question}
                className={`overflow-hidden rounded-2xl bg-white ring-1 transition-shadow duration-300 ${
                  isOpen ? 'shadow-lg shadow-sand-900/5 ring-brand-300' : 'ring-sand-200'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-sand-900">{faq.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-brand-700 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                    aria-hidden="true"
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 leading-relaxed text-sand-800">{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <p className="text-sand-800">
            Ficou com outra dúvida?{' '}
            <a
              href={whatsappLink('Olá! Tenho uma dúvida sobre os tratamentos da Lumina Odontologia.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-semibold text-brand-700 underline decoration-brand-300 decoration-2 underline-offset-4 transition-colors hover:text-brand-800"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Fale com a gente no WhatsApp
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
