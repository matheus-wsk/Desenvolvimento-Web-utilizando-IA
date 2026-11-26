import { MessageCircle } from 'lucide-react';
import { whatsappLink } from '@/lib/site';

export default function FloatingWhatsapp() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-0 rounded-full bg-brand-600 py-4 pl-4 pr-4 text-white shadow-2xl shadow-brand-900/30 transition-all duration-300 hover:bg-brand-700 hover:pr-6"
      aria-label="Agendar avaliação pelo WhatsApp"
    >
      <span
        className="absolute inset-0 -z-10 animate-ping rounded-full bg-brand-500 opacity-20"
        aria-hidden="true"
      />
      <MessageCircle className="h-6 w-6 shrink-0" aria-hidden="true" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold transition-all duration-300 group-hover:ml-2 group-hover:max-w-[10rem]">
        Agendar avaliação
      </span>
    </a>
  );
}
