import { useState } from 'react';
import { Calculator, Shield, BadgeCheck, UserCheck, Droplets } from 'lucide-react';
import { openCallbackModal } from './CallbackModal';

const advantages = [
  {
    icon: Droplets,
    title: 'Услуги без лишней «воды»',
    desc: 'Честная работа без навязанных услуг и скрытых платежей',
  },
  {
    icon: BadgeCheck,
    title: 'Цена без лишних доплат',
    desc: 'Стоимость на сайте совпадает с реальной — без сюрпризов',
  },
  {
    icon: UserCheck,
    title: 'Индивидуальный подход',
    desc: 'Подбираем метод обработки под вашу ситуацию',
  },
  {
    icon: Shield,
    title: 'Бесплатная гарантия',
    desc: 'Повторная обработка бесплатно при обнаружении клопов',
  },
];

const VIDEO_URL = 'https://s3.twcstorage.ru/782c2053-d45b-4028-b43b-bd041bb9d404/%D0%B2%D0%B8%D0%B4%D0%B5%D0%BE%20%D0%BA%D0%BB%D0%BE%D0%BF%D1%8B%20%D0%B4%D0%BB%D1%8F%20%D0%BF%D0%B5%D1%80%D0%B2%D0%BE%D0%B3%D0%BE%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0.mp4';

export default function HeroSection() {
  const [videoError, setVideoError] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <>
      {/* Desktop/Tablet Version */}
      <section className="hidden sm:block relative bg-gray-950 overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          {!videoError ? (
            <video
              autoPlay
              loop
              muted
              playsInline
              className={`w-full h-full object-cover opacity-55 transition-opacity duration-1000 ${
                videoLoaded ? 'opacity-55' : 'opacity-0'
              }`}
              onCanPlay={() => setVideoLoaded(true)}
              onError={() => setVideoError(true)}
            >
              <source src={VIDEO_URL} type="video/mp4" />
            </video>
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-gray-900 via-emerald-950 to-gray-900" />
          )}
          {/* No overlay */}
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-24 lg:pt-32 pb-16 sm:pb-28 lg:pb-36">
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="animate-fade-up inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-5 sm:mb-8 animate-shimmer">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-emerald-400 text-xs sm:text-sm font-medium">Профессиональная дезинсекция</span>
            </div>

            {/* USP */}
            <h1 className="animate-fade-up-delay-1 text-2xl sm:text-4xl lg:text-6xl font-extrabold text-white leading-tight mb-3 sm:mb-6 tracking-tight">
              Обработка от клопов{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-300">
                по разумной цене
              </span>
            </h1>

            {/* Subtitle */}
            <p className="animate-fade-up-delay-2 text-gray-400 text-sm sm:text-lg lg:text-xl mb-6 sm:mb-10 max-w-lg leading-relaxed">
              Избавим ваш дом от постельных клопов навсегда. Безопасные препараты, гарантия результата, честные цены.
            </p>

            {/* CTA */}
            <div className="animate-fade-up-delay-3">
              <button
                onClick={openCallbackModal}
                className="animate-pulse-glow group inline-flex items-center gap-2 sm:gap-3 px-5 sm:px-7 py-3.5 sm:py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm sm:text-lg rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/40 active:scale-95 w-full sm:w-auto justify-center"
              >
                <Calculator className="w-4 h-4 sm:w-6 sm:h-6 group-hover:rotate-12 transition-transform duration-300" />
                Рассчитать точную стоимость
              </button>
            </div>

            {/* Trust indicators */}
            <div className="animate-fade-up-delay-3 flex items-center gap-4 sm:gap-6 mt-6 sm:mt-8 text-xs sm:text-sm text-gray-500">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <Shield className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-500 animate-float" />
                <span>Гарантия</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <BadgeCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-500 animate-float" style={{ animationDelay: '0.5s' }} />
                <span>Лицензия</span>
              </div>
            </div>
          </div>
        </div>

        {/* Advantages */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-20">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4">
            {advantages.map((adv, i) => (
              <div
                key={adv.title}
                className={`animate-card-in animate-card-in-${i + 1} group bg-white/5 backdrop-blur-md border border-white/10 rounded-xl sm:rounded-2xl p-3.5 sm:p-6 hover:bg-white/10 hover:border-emerald-500/30 sm:hover:-translate-y-1 transition-all duration-300`}
              >
                <div className="w-9 h-9 sm:w-11 sm:h-11 bg-emerald-500/15 rounded-lg sm:rounded-xl flex items-center justify-center mb-2.5 sm:mb-4 group-hover:bg-emerald-500/25 group-hover:scale-110 transition-all duration-300">
                  <adv.icon className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" />
                </div>
                <h3 className="text-white font-semibold text-xs sm:text-base mb-0.5 sm:mb-1.5 leading-tight">{adv.title}</h3>
                <p className="text-gray-400 text-[11px] sm:text-sm leading-relaxed hidden sm:block">{adv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile Version */}
      <section className="sm:hidden relative bg-gray-950 overflow-hidden min-h-screen">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          {!videoError ? (
            <video
              autoPlay
              loop
              muted
              playsInline
              className={`w-full h-full object-cover opacity-55 transition-opacity duration-1000 ${
                videoLoaded ? 'opacity-55' : 'opacity-0'
              }`}
              onCanPlay={() => setVideoLoaded(true)}
              onError={() => setVideoError(true)}
            >
              <source src={VIDEO_URL} type="video/mp4" />
            </video>
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-gray-900 via-emerald-950 to-gray-900" />
          )}
          {/* No overlay */}
        </div>

        {/* Decorative particles for mobile */}
        <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-emerald-400/40 rounded-full animate-float" style={{ animationDelay: '0s' }} />
          <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-emerald-400/30 rounded-full animate-float" style={{ animationDelay: '1s' }} />
          <div className="absolute top-2/3 left-1/2 w-1 h-1 bg-orange-400/30 rounded-full animate-float" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-emerald-400/20 rounded-full animate-float" style={{ animationDelay: '0.5s' }} />
        </div>

        {/* Content - centered on mobile, full height */}
        <div className="relative z-10 px-4 w-full flex flex-col justify-center items-center min-h-screen">
          <div className="max-w-2xl w-full text-center">
            {/* USP */}
            <h1 className="animate-fade-up-delay-1 text-2xl font-extrabold text-white leading-tight mb-6 tracking-tight">
              Обработка от клопов{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-300">
                по разумной цене
              </span>
            </h1>

            {/* Advantages - on mobile below title */}
            <div className="animate-fade-up-delay-2 w-full mb-6">
              <div className="grid grid-cols-2 gap-2.5">
                {advantages.map((adv, i) => (
                  <div
                    key={adv.title}
                    className={`animate-card-in animate-card-in-${i + 1} group bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-3.5 hover:bg-white/10 hover:border-emerald-500/30 transition-all duration-300`}
                  >
                    <div className="w-8 h-8 bg-emerald-500/15 rounded-lg flex items-center justify-center mb-2.5 group-hover:bg-emerald-500/25 group-hover:scale-110 transition-all duration-300">
                      <adv.icon className="w-4 h-4 text-emerald-400" />
                    </div>
                    <h3 className="text-white font-semibold text-xs leading-tight">{adv.title}</h3>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button - on mobile */}
            <div className="animate-fade-up-delay-3 w-full">
              <button
                onClick={openCallbackModal}
                className="animate-pulse-glow group w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/40 active:scale-95"
              >
                <Calculator className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                Рассчитать точную стоимость
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
