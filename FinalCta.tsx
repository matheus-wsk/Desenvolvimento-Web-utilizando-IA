import { MessageCircle, Phone, MapPin, Clock, Instagram, Facebook } from 'lucide-react';
import { whatsappLink } from '@/lib/site';

export default function FinalCta() {
  return (
    <>
      <section className="relative overflow-hidden bg-brand-800 py-20 lg:py-24">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          aria-hidden="true"
        >
          <div className="absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-brand-500 blur-3xl" />
          <div className="absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-accent-500/30 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-3xl px-5 text-center lg:px-8">
          <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
            Seu sorriso pode começar a mudar hoje — com uma simples mensagem
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-brand-100">
            Agende sua avaliação inicial e descubra, sem compromisso, o que é possível para o
            seu sorriso. A conversa dura minutos; o resultado, para sempre.
          </p>
          <div className="mt-9">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp btn-whatsapp-lg !bg-white !text-brand-800 !shadow-xl hover:!bg-brand-50"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              Agendar minha avaliação pelo WhatsApp
            </a>
          </div>
          <p className="mt-4 text-sm text-brand-200">
            Sem compromisso · Resposta rápida em horário comercial
          </p>
        </div>
      </section>

      <footer className="bg-sand-900 text-sand-200">
        <div className="mx-auto max-w-6xl px-5 py-14 lg:px-8">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-2.5">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-600 text-white">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                    <path d="M6.2 13.8c1.3-3.4 2-5.6 3.4-5.9.9-.2 1.6.3 2.4.3s1.5-.5 2.4-.3c1.4.3 2.1 2.5 3.4 5.9.5 1.4-.6 2.3-1.7 1.6-1.1-.7-2.2-2.4-4.1-2.4s-3 1.7-4.1 2.4c-1.1.7-2.2-.2-1.7-1.6z" />
                  </svg>
                </span>
                <span className="font-display text-xl font-semibold text-white">Lumina</span>
              </div>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-sand-300">
                Estética do sorriso e reabilitação oral com planejamento digital e atendimento
                humano. CRO-SP 000.000 · Responsável Técnico: Dra. Ana Beatriz Costa.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-sand-400">
                Contato
              </h3>
              <ul className="mt-4 space-y-3 text-sm">
                <li className="flex items-start gap-2.5">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" aria-hidden="true" />
                  Rua Oscar Freire, 000 — Jardins
                  <br />
                  São Paulo/SP · CEP 00000-000
                </li>
                <li className="flex items-center gap-2.5">
                  <Phone className="h-4 w-4 shrink-0 text-brand-400" aria-hidden="true" />
                  (11) 99999-9999
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-sand-400">
                Horários
              </h3>
              <ul className="mt-4 space-y-3 text-sm">
                <li className="flex items-start gap-2.5">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" aria-hidden="true" />
                  Segunda a sexta: 8h às 19h
                  <br />
                  Sábado: 8h às 13h
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-sand-400">
                Siga a Lumina
              </h3>
              <div className="mt-4 flex gap-3">
                <a
                  href="#"
                  aria-label="Instagram da Lumina Odontologia"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-sand-800 text-sand-200 transition-colors hover:bg-brand-600 hover:text-white"
                >
                  <Instagram className="h-5 w-5" aria-hidden="true" />
                </a>
                <a
                  href="#"
                  aria-label="Facebook da Lumina Odontologia"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-sand-800 text-sand-200 transition-colors hover:bg-brand-600 hover:text-white"
                >
                  <Facebook className="h-5 w-5" aria-hidden="true" />
                </a>
              </div>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-300 transition-colors hover:text-brand-200"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Agendar pelo WhatsApp
              </a>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-sand-800 pt-8 text-xs text-sand-400 sm:flex-row">
            <p>© {new Date().getFullYear()} Lumina Odontologia. Projeto fictício para portfólio.</p>
            <p>
              As informações deste site não substituem a consulta odontológica. Procure sempre um
              profissional.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
