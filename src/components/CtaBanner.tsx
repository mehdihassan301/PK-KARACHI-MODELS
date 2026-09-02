import { MessageSquare, PhoneCall } from 'lucide-react';
import { CONTACT_PHONE, WHATSAPP_URL } from '../data';

export default function CtaBanner() {
  return (
    <section id="contact" className="py-16 sm:py-20 relative overflow-hidden bg-[#111] text-white border-y-4 border-[#b91c1c]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <span className="inline-block text-[11px] uppercase tracking-[0.25em] font-extrabold text-[#b91c1c] mb-2">
          Private Outcalls &amp; Instant Booking
        </span>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase mb-3 text-white tracking-tight">
          Ready to Book Your Karachi Escort?
        </h2>

        <div className="h-1 w-20 bg-[#b91c1c] mx-auto mb-6"></div>

        <p className="text-xs sm:text-sm text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
          Stop wasting time on unreliable listings and vague agencies. Message us now for real profiles, clear rates, and fast arrangement in your preferred area of Karachi.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            id="cta-whatsapp-btn"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#b91c1c] hover:bg-[#991b1b] text-white text-xs font-bold uppercase tracking-wider py-3.5 px-8 shadow-sm hover:shadow transition-all duration-300 group"
          >
            <MessageSquare className="w-4 h-4 fill-white group-hover:scale-110 transition-transform" />
            <span>WhatsApp for Instant Response</span>
          </a>

          <a
            href={`tel:${CONTACT_PHONE.replace(/\s+/g, '')}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-gray-700 hover:border-[#b91c1c] bg-transparent hover:bg-white hover:text-black text-white text-xs font-bold uppercase tracking-wider py-3.5 px-6 transition-all"
          >
            <PhoneCall className="w-3.5 h-3.5 text-[#b91c1c]" />
            <span>Call: {CONTACT_PHONE}</span>
          </a>
        </div>

        <div className="space-y-2 text-xs sm:text-sm text-gray-400">
          <p>Available 24/7 across DHA, Clifton, Gulshan-e-Iqbal, PECHS, Bahria Town and the rest of the city.</p>
          <p className="font-bold text-white uppercase tracking-wider text-xs">
            Experience verified Karachi escorts the way it should be — professional, private, and exactly as promised.
          </p>
        </div>
      </div>
    </section>
  );
}
