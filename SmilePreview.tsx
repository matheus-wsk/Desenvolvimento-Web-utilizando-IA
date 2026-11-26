import { ScanLine, Smile, Eye } from 'lucide-react';

export default function SmilePreview() {
  return (
    <div className="relative mx-auto w-full max-w-md animate-fade-up lg:max-w-none">
      <div className="relative rounded-[2rem] bg-gradient-to-br from-brand-50 via-white to-sand-100 p-1.5 shadow-2xl shadow-brand-900/10">
        <div className="relative overflow-hidden rounded-[1.7rem] bg-sand-900">
          <svg viewBox="0 0 400 340" className="block w-full" role="img" aria-label="Ilustração de um sorriso sendo planejado digitalmente">
            <defs>
              <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#175453" />
                <stop offset="100%" stopColor="#0f2b2b" />
              </linearGradient>
              <linearGradient id="scan" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#7bd8cd" stopOpacity="0" />
                <stop offset="50%" stopColor="#7bd8cd" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#7bd8cd" stopOpacity="0" />
              </linearGradient>
            </defs>

            <rect width="400" height="340" fill="url(#bg)" />

            <g stroke="#47bdb3" strokeOpacity="0.18" strokeWidth="1">
              {Array.from({ length: 9 }).map((_, i) => (
                <line key={`v${i}`} x1={40 * (i + 1)} y1="0" x2={40 * (i + 1)} y2="340" />
              ))}
              {Array.from({ length: 8 }).map((_, i) => (
                <line key={`h${i}`} x1="0" y1={40 * (i + 1)} x2="400" y2={40 * (i + 1)} />
              ))}
            </g>

            <circle cx="200" cy="165" r="118" fill="none" stroke="#7bd8cd" strokeOpacity="0.35" strokeWidth="1.5" strokeDasharray="6 8" />
            <circle cx="200" cy="165" r="96" fill="none" stroke="#7bd8cd" strokeOpacity="0.2" strokeWidth="1" />

            <g>
              <path
                d="M120 150c0-26 18-42 40-42 16 0 27 8 40 8s24-8 40-8c22 0 40 16 40 42 0 40-22 76-40 76-13 0-18-14-40-14s-27 14-40 14c-18 0-40-36-40-76z"
                fill="#faf8f5"
              />
              <path
                d="M133 152c0-20 14-32 31-32 12 0 21 6 31 6"
                fill="none"
                stroke="#e6ded2"
                strokeWidth="5"
                strokeLinecap="round"
              />
            </g>

            <rect x="60" y="118" width="280" height="46" fill="url(#scan)">
              <animate
                attributeName="y"
                values="118;190;118"
                dur="3.6s"
                repeatCount="indefinite"
              />
            </rect>

            <g fontFamily="Inter, sans-serif" fontSize="11" fill="#aeeae1">
              <g>
                <rect x="64" y="36" width="128" height="26" rx="13" fill="#0f2b2b" fillOpacity="0.85" stroke="#47bdb3" strokeOpacity="0.4" />
                <circle cx="80" cy="49" r="4" fill="#47bdb3" />
                <text x="92" y="53">Escaneamento 3D</text>
              </g>
              <g>
                <rect x="216" y="36" width="132" height="26" rx="13" fill="#0f2b2b" fillOpacity="0.85" stroke="#47bdb3" strokeOpacity="0.4" />
                <circle cx="232" cy="49" r="4" fill="#f0bc5e" />
                <text x="244" y="53">Planejamento visual</text>
              </g>
              <g>
                <rect x="96" y="284" width="208" height="28" rx="14" fill="#0f2b2b" fillOpacity="0.85" stroke="#47bdb3" strokeOpacity="0.4" />
                <text x="200" y="302" textAnchor="middle" fill="#faf8f5" fontWeight="600">
                  Resultado simulado antes de começar
                </text>
              </g>
            </g>

            <g stroke="#f0bc5e" strokeWidth="2" strokeLinecap="round">
              <line x1="296" y1="96" x2="312" y2="112" />
              <line x1="104" y1="96" x2="88" y2="112" />
              <line x1="296" y1="240" x2="312" y2="224" />
              <line x1="104" y1="240" x2="88" y2="224" />
            </g>
          </svg>
        </div>
      </div>

      <div className="absolute -bottom-5 -left-4 hidden items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-xl shadow-sand-900/10 ring-1 ring-sand-200 animate-float sm:flex">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-100 text-brand-700">
          <ScanLine className="h-5 w-5" aria-hidden="true" />
        </span>
        <div>
          <p className="text-sm font-semibold text-sand-900">Sem moldagens</p>
          <p className="text-xs text-sand-700">Scanner intraoral em minutos</p>
        </div>
      </div>

      <div className="absolute -top-4 -right-3 hidden items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-xl shadow-sand-900/10 ring-1 ring-sand-200 animate-float [animation-delay:1.5s] sm:flex">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-300/30 text-sand-800">
          <Eye className="h-5 w-5" aria-hidden="true" />
        </span>
        <div>
          <p className="text-sm font-semibold text-sand-900">Você aprova antes</p>
          <p className="text-xs text-sand-700">Simulação do seu sorriso</p>
        </div>
      </div>

      <div className="absolute -right-2 bottom-16 hidden h-12 w-12 items-center justify-center rounded-2xl bg-brand-600 text-white shadow-lg animate-float [animation-delay:3s] lg:flex">
        <Smile className="h-6 w-6" aria-hidden="true" />
      </div>
    </div>
  );
}
