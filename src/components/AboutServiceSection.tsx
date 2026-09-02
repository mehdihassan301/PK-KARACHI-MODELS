import { MessageSquare, ShieldCheck } from 'lucide-react';
import { ABOUT_BG_URL, ABOUT_IMG_1, ABOUT_IMG_2, WHATSAPP_URL } from '../data';

export default function AboutServiceSection() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-white relative overflow-hidden border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Heading & Content */}
          <div className="lg:col-span-6 space-y-6">
            <span className="inline-block text-[11px] uppercase tracking-[0.25em] font-extrabold text-[#b91c1c]">
              Karachi Escorts Service
            </span>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase text-gray-900 tracking-tight leading-tight">
              Karachi Escorts – Premium VIP Call Girls &amp; Outcall Service Across the City
            </h2>

            {/* Red accent bar */}
            <div className="h-1 w-20 bg-[#b91c1c]"></div>

            <p className="text-base sm:text-lg font-medium text-gray-800 border-l-4 border-[#b91c1c] pl-4 italic">
              For clients who want the absolute best, we offer model-type karachi escorts and VIP call girls.
            </p>

            <div className="space-y-4 text-sm sm:text-base text-gray-600 leading-relaxed">
              <p>
                Looking for reliable, discreet <strong className="text-[#b91c1c] font-bold">Karachi escorts</strong>? We provide verified VIP companions, independent models, and high-class call girls available 24/7 for hotel outcalls, private residences, and short or overnight bookings. Serving clients across DHA, Clifton, Gulshan-e-Iqbal, PECHS, Bahria Town, and every major locality in Karachi with complete privacy and professional service.
              </p>
              <p>
                Whether you need a sophisticated dinner companion, a relaxed evening at your hotel, or full-night companionship, our team delivers real photos, clear communication, and punctual arrivals. No fake profiles. No last-minute surprises.
              </p>
              <p className="font-bold text-[#b91c1c] uppercase text-xs tracking-wider">
                WhatsApp us now for available profiles and same-day booking.
              </p>
            </div>

            <div className="pt-2">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                id="about-whatsapp-btn"
                className="inline-flex items-center gap-2.5 bg-[#b91c1c] hover:bg-[#991b1b] text-white px-7 py-3.5 text-xs font-bold uppercase tracking-wider shadow-sm hover:shadow transition-all duration-300"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>WhatsApp Available Profiles</span>
              </a>
            </div>
          </div>

          {/* Right Column: Layered Photo Cards */}
          <div className="lg:col-span-6 relative flex justify-center items-center">
            {/* Background Graphic */}
            <div className="relative w-full max-w-[480px] sm:max-w-[540px]">
              <img
                src={ABOUT_BG_URL}
                alt="Karachi Models Pattern"
                className="w-full h-auto opacity-25 object-contain mx-auto"
                loading="lazy"
              />

              {/* Photo 1 - Left card */}
              <div className="absolute top-4 left-0 sm:left-4 w-44 sm:w-56 overflow-hidden shadow-lg border border-gray-200 bg-white transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                <img
                  src={ABOUT_IMG_1}
                  alt="escorts in karachi"
                  className="w-full h-64 sm:h-80 object-cover"
                  loading="lazy"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-3 text-white">
                  <span className="text-[10px] font-bold uppercase tracking-widest bg-[#b91c1c] px-2 py-0.5">Verified Profile</span>
                  <p className="text-xs sm:text-sm font-bold mt-1 uppercase tracking-tight">DHA &amp; Clifton Outcall</p>
                </div>
              </div>

              {/* Photo 2 - Right card */}
              <div className="absolute -bottom-6 right-0 sm:right-4 w-48 sm:w-60 overflow-hidden shadow-lg border border-gray-200 bg-white transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <img
                  src={ABOUT_IMG_2}
                  alt="karachi escort"
                  className="w-full h-68 sm:h-84 object-cover"
                  loading="lazy"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-3 text-white">
                  <span className="text-[10px] font-bold uppercase tracking-widest bg-[#b91c1c] px-2 py-0.5">Active 24/7</span>
                  <p className="text-xs sm:text-sm font-bold mt-1 uppercase tracking-tight">VIP Karachi Companion</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
