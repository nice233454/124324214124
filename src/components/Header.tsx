import { Phone, Star, Menu, X } from 'lucide-react';
import { openCallbackModal } from './CallbackModal';
import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="bg-white/95 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50 shadow-sm sm:block hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <a href="/" className="flex items-center gap-2.5 shrink-0">
              <img
                src="https://i.postimg.cc/GhpD662p/favicon.webp"
                alt="СЭС-Профи"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg object-contain"
              />
              <div>
                <span className="text-gray-900 font-bold text-lg leading-tight block">СЭС-Профи</span>
                <span className="text-gray-500 text-xs">Дезинсекция</span>
              </div>
            </a>

            {/* Rating */}
            <a
              href="https://yandex.ru/maps/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-1.5 px-3 py-1.5 bg-amber-50 rounded-full border border-amber-200 hover:bg-amber-100 transition-colors"
            >
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span className="text-sm font-semibold text-amber-700">4.9</span>
              <span className="text-xs text-amber-600">Яндекс Карты</span>
            </a>

            {/* CTA Button */}
            <button
              onClick={openCallbackModal}
              className="hidden sm:flex items-center gap-2 px-5 py-2.5 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-all duration-200 shadow-md shadow-orange-500/25 hover:shadow-lg hover:shadow-orange-500/30 active:scale-95"
            >
              <Phone className="w-4 h-4" />
              Заказать звонок
            </button>

            {/* Messengers (desktop only) */}
            <div className="hidden lg:flex items-center gap-2">
              <span className="text-xs text-gray-500 mr-1">Напишите нам:</span>
              <a
                href="https://t.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-lg bg-sky-100 hover:bg-sky-200 transition-colors"
                aria-label="Telegram"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0Z" fill="#26A5E4"/>
                  <path d="m5.432 11.873 8.37-3.543c.389-.17 1.435-.56 1.435-.56s.643-.248.577.389c-.022.248-.166 1.092-.31 2.024l-.918 5.448s-.067.499-.411.576c-.344.078-.877-.21-.877-.21l-3.876-2.588s-.277-.166-.022-.388c.255-.222.576-.499.576-.499l4.397-3.21s.255-.166.022-.255c-.233-.089-.833.022-1.268.277l-5.37 3.487s-.478.222-.855-.022c-.377-.244.011-.744.011-.744Z" fill="#fff"/>
                </svg>
              </a>
              <a
                href="https://max.ru/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors"
                aria-label="Макс"
              >
                <img
                  src="https://i.postimg.cc/2jh9VbFn/Logotip-MAX-svg.webp"
                  alt="Макс"
                  className="w-5 h-5 object-contain"
                />
              </a>
            </div>

            {/* Phone */}
            <div className="flex flex-col items-end">
              <a href="tel:+78001234567" className="text-gray-900 font-bold text-base sm:text-lg hover:text-emerald-600 transition-colors">
                8 (800) 123-45-67
              </a>
              <span className="text-xs text-emerald-600 font-medium">Круглосуточно</span>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Header */}
      <header className="sm:hidden sticky top-0 z-50">
        <div className="bg-gray-950/95 backdrop-blur-xl border-b border-white/10">
          <div className="px-4 py-3 flex items-center justify-between">
            {/* Logo */}
            <a href="/" className="flex items-center gap-2.5">
              <img
                src="https://i.postimg.cc/GhpD662p/favicon.webp"
                alt="СЭС-Профи"
                className="w-8 h-8 rounded-lg object-contain"
              />
              <div className="flex items-center gap-2">
                <span className="text-white font-bold text-base leading-none">СЭС-Профи</span>
                <div className="flex items-center gap-1 px-2 py-0.5 bg-amber-500/15 rounded-full">
                  <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                  <span className="text-[11px] font-bold text-amber-400">4.9</span>
                </div>
              </div>
            </a>

            {/* Right side actions */}
            <div className="flex items-center gap-2">
              <a
                href="tel:+78001234567"
                className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/10 active:bg-white/20 transition-colors"
                aria-label="Позвонить"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
              </a>
              <button
                onClick={openCallbackModal}
                className="px-3.5 py-2 bg-orange-500 active:bg-orange-600 text-white font-semibold text-xs rounded-lg transition-colors"
              >
                Звонок
              </button>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/10 active:bg-white/20 transition-colors"
                aria-label="Меню"
              >
                {menuOpen ? <X className="w-4 h-4 text-white" /> : <Menu className="w-4 h-4 text-white" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {menuOpen && (
          <div className="bg-gray-950/98 backdrop-blur-xl border-b border-white/10 animate-fade-down">
            <div className="px-4 py-4 space-y-3">
              <a
                href="tel:+78001234567"
                className="flex items-center gap-3 p-3 rounded-xl bg-white/5 active:bg-white/10 transition-colors"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <div>
                  <div className="text-white font-semibold text-sm">8 (800) 123-45-67</div>
                  <div className="text-emerald-400 text-xs">Круглосуточно</div>
                </div>
              </a>
              <div className="flex gap-2">
                <a
                  href="https://t.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl bg-[#26A5E4]/15 active:bg-[#26A5E4]/25 transition-colors"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0Z" fill="#26A5E4"/>
                    <path d="m5.432 11.873 8.37-3.543c.389-.17 1.435-.56 1.435-.56s.643-.248.577.389c-.022.248-.166 1.092-.31 2.024l-.918 5.448s-.067.499-.411.576c-.344.078-.877-.21-.877-.21l-3.876-2.588s-.277-.166-.022-.388c.255-.222.576-.499.576-.499l4.397-3.21s.255-.166.022-.255c-.233-.089-.833.022-1.268.277l-5.37 3.487s-.478.222-.855-.022c-.377-.244.011-.744.011-.744Z" fill="#fff"/>
                  </svg>
                  <span className="text-sky-300 text-sm font-medium">Telegram</span>
                </a>
                <a
                  href="https://max.ru/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl bg-white/5 active:bg-white/10 transition-colors border border-white/10"
                >
                  <img
                    src="https://i.postimg.cc/2jh9VbFn/Logotip-MAX-svg.webp"
                    alt="Макс"
                    className="w-5 h-5 object-contain"
                  />
                  <span className="text-gray-300 text-sm font-medium">Макс</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
