import { MessageSquare } from 'lucide-react';
import { HERO_IMG, WHATSAPP_URL, handleImageFallback } from '../data';

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative pt-28 sm:pt-36 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#f8f9fa]"
    >
      {/* Subtle decorative studio gradients */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(185, 28, 28, 0.05) 0%, transparent 70%)',
          top: '-150px',
          right: '-100px',
          zIndex: 0,
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(0, 0, 0, 0.03) 0%, transparent 70%)',
          bottom: '-150px',
          left: '-80px',
          zIndex: 0,
        }}
      />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 relative z-10">
        {/* Left Content Card - Artistic Flair Clean Editorial Card */}
        <div
          id="hero-content-card"
          className="w-full lg:max-w-[580px] p-6 sm:p-9 md:p-10 bg-white border border-gray-200 shadow-sm"
        >
          <span className="inline-block text-[11px] uppercase tracking-[0.25em] font-extrabold text-[#b91c1c] mb-2">
            Discreet &amp; Verified Companions
          </span>

          <h1 className="text-2xl sm:text-3xl md:text-[34px] font-black uppercase text-gray-900 leading-[1.2] mb-3 tracking-tight">
            Karachi Escorts – Premium VIP Call Girls &amp; Companionship Across the City
          </h1>

          {/* Artistic Flair Red Line Accent */}
          <div className="h-1 w-20 bg-[#b91c1c] mb-5"></div>

          <p className="text-gray-600 text-sm sm:text-base leading-[1.7] mb-7">
            Book verified Karachi Escorts and VIP call girls for discreet hotel outcalls and private
            meetings across DHA, Clifton, PECHS and all major areas. Fast 24/7 response available.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              id="hero-whatsapp-btn"
              className="inline-flex items-center justify-center gap-2.5 bg-[#b91c1c] hover:bg-[#991b1b] text-white text-xs font-bold uppercase tracking-wider py-3.5 px-6 shadow-sm hover:shadow transition-all duration-300 group"
            >
              <MessageSquare className="w-4 h-4 fill-white group-hover:scale-110 transition-transform" />
              <span>Chat on WhatsApp</span>
            </a>

            <a
              href="#services"
              className="inline-flex items-center justify-center bg-gray-200 text-gray-900 hover:bg-[#b91c1c] hover:text-white text-xs font-bold uppercase tracking-wider py-3.5 px-6 transition-all text-center"
            >
              View Profiles &amp; Services
            </a>
          </div>
        </div>

        {/* Right Hero Image */}
        <div id="hero-image-container" className="w-full lg:w-auto flex justify-center order-first lg:order-last">
          <div className="relative group max-w-[340px] sm:max-w-[420px] w-full">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl border-4 border-white bg-gray-900">
              <img
                src={HERO_IMG}
                alt="Karachi Escorts - Premium VIP Call Girls"
                className="w-full h-[400px] sm:h-[480px] object-cover transition-transform duration-700 group-hover:scale-105"
                loading="eager"
                onError={handleImageFallback}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none flex flex-col justify-end p-5">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-red-400">Karachi VIP Model</span>
                <p className="text-white font-black text-sm uppercase tracking-wide">Available 24/7 For Outcall</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
