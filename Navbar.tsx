import { useEffect, useState } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { whatsappLink } from '@/lib/site';

const NAV_ITEMS = [
  { href: '#beneficios', label: 'Benefícios' },
  { href: '#como-funciona', label: 'Como funciona' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#faq', label: 'Dúvidas frequentes' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-sand-50/90 backdrop-blur-md shadow-sm shadow-sand-900/5'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#" className="flex items-center gap-2.5" aria-label="Lumina Odontologia — início">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-600 text-white">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
              <path d="M6.2 13.8c1.3-3.4 2-5.6 3.4-5.9.9-.2 1.6.3 2.4.3s1.5-.5 2.4-.3c1.4.3 2.1 2.5 3.4 5.9.5 1.4-.6 2.3-1.7 1.6-1.1-.7-2.2-2.4-4.1-2.4s-3 1.7-4.1 2.4c-1.1.7-2.2-.2-1.7-1.6z" />
            </svg>
          </span>
          <span className="font-display text-xl font-semibold tracking-tight text-sand-900">
            Lumina
            <span className="ml-1.5 hidden text-sm font-medium uppercase tracking-widest text-brand-700 sm:inline">
              Odontologia
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-sand-800 transition-colors hover:text-brand-700"
            >
              {item.label}
            </a>
          ))}
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-brand-600/20 transition-all duration-300 hover:bg-brand-700 hover:shadow-lg hover:-translate-y-0.5"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Agendar avaliação
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full text-sand-900 transition-colors hover:bg-sand-100 md:hidden"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-sand-200 bg-sand-50 px-5 pb-6 pt-3 md:hidden">
          <div className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-sand-800 transition-colors hover:bg-sand-100"
              >
                {item.label}
              </a>
            ))}
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp mt-3"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              Agendar avaliação
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
