import { MessageSquare } from 'lucide-react';
import { WHATSAPP_URL, CONTACT_PHONE } from '../data';

export default function FloatingWhatsApp() {
  return (
    <aside aria-label="WhatsApp Quick Contact" className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Tooltip on desktop */}
      <span className="hidden md:inline-flex items-center gap-1.5 bg-[#111] text-white text-[10px] font-bold uppercase tracking-wider px-3.5 py-2 shadow-2xl border border-gray-800">
        <span className="w-2 h-2 rounded-full bg-[#b91c1c] animate-ping" />
        <span>Chat with us: {CONTACT_PHONE}</span>
      </span>

      {/* WhatsApp Button */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        id="floating-whatsapp-btn"
        className="relative group w-13 h-13 rounded-full bg-[#b91c1c] hover:bg-[#991b1b] text-white flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-white/20"
        aria-label="Chat with Karachi Escorts on WhatsApp"
      >
        <span className="absolute -inset-1 rounded-full bg-[#b91c1c]/40 animate-ping -z-10" />
        <MessageSquare className="w-6 h-6 fill-white" />
      </a>
    </aside>
  );
}
