import { MessageCircle, ShieldCheck, ScanLine, MapPin } from 'lucide-react';
import { whatsappLink } from '@/lib/site';
import SmilePreview from './SmilePreview';

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        <div className="absolute -top-32 right-[-10%] h-[480px] w-[480px] rounded-full bg-brand-100/70 blur-3xl" />
        <div className="absolute bottom-[-20%] left-[-8%] h-[380px] w-[380px] rounded-full bg-accent-300/20 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:px-8">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5 text-sm font-medium text-brand-800">
            <span className="h-2 w-2 rounded-full bg-brand-500 animate-pulse-soft" aria-hidden="true" />
            Agenda aberta para novas avaliações
          </span>

          <h1 className="mt-6 font-display text-3xl font-semibold leading-[1.15] tracking-tight text-sand-900 sm:text-5xl lg:text-[3.4rem]">
            O sorriso que você quer,{' '}
            <span className="relative whitespace-nowrap text-brand-700">
              planejado antes
              <svg
                className="absolute -bottom-2 left-0 w-full text-accent-400"
                viewBox="0 0 220 12"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M3 9c40-5.5 120-7.5 214-3.5"
                  stroke="currentColor"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
              </svg>
            </span>{' '}
            de tocar no seu dente
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-relaxed text-sand-800">
            Na Lumina, você vê o resultado esperado no planejamento digital antes de começar.
            Sem moldagens desconfortáveis, sem surpresas — só um atendimento acolhedor, do
            primeiro contato ao sorriso final.
          </p>

          <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp btn-whatsapp-lg"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              Agendar avaliação pelo WhatsApp
            </a>
            <p className="text-sm text-sand-700">
              Resposta rápida em horário comercial · Sem compromisso
            </p>
          </div>

          <ul className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-medium text-sand-800">
            <li className="flex items-center gap-2">
              <ScanLine className="h-5 w-5 text-brand-600" aria-hidden="true" />
              Escaneamento digital, sem moldagem
            </li>
            <li className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-brand-600" aria-hidden="true" />
              Equipe especializada
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-brand-600" aria-hidden="true" />
              Jardins, São Paulo
            </li>
          </ul>
        </div>

        <SmilePreview />
      </div>
    </section>
  );
}
