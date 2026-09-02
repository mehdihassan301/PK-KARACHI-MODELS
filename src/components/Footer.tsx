import { useState, type FormEvent } from 'react';
import { LOGO_URL } from '../data';
import { Send, CheckCircle2 } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletter = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setSubscribed(false);
      }, 4000);
    }
  };

  return (
    <footer className="bg-[#111] text-white border-t-4 border-[#b91c1c] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 4-column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-12">
          {/* Column 1: Monogram Logo & Description (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#home" className="flex items-center gap-2.5 group">
              <div className="bg-[#b91c1c] w-8 h-8 flex items-center justify-center text-white font-black text-lg shrink-0">
                PK
              </div>
              <span className="text-lg font-black tracking-tighter uppercase text-white group-hover:text-[#b91c1c] transition-colors">
                KARACHI MODELS &amp; ESCORTS
              </span>
            </a>
            <p className="text-xs text-gray-400 leading-relaxed max-w-sm">
              Premium VIP escorts and verified companions available across DHA, Clifton, and all major areas in Karachi. Discreet, reliable, and 24/7 punctual.
            </p>

            {/* Social Icons matching Artistic Flair */}
            <div className="flex items-center gap-2 pt-2">
              <a
                href="#home"
                className="w-8 h-8 rounded-full border border-gray-700 flex items-center justify-center text-[10px] text-gray-300 hover:border-[#b91c1c] hover:text-[#b91c1c] transition-colors"
                aria-label="Facebook"
              >
                <span>FB</span>
              </a>
              <a
                href="#home"
                className="w-8 h-8 rounded-full border border-gray-700 flex items-center justify-center text-[10px] text-gray-300 hover:border-[#b91c1c] hover:text-[#b91c1c] transition-colors"
                aria-label="Twitter"
              >
                <span>TW</span>
              </a>
              <a
                href="#home"
                className="w-8 h-8 rounded-full border border-gray-700 flex items-center justify-center text-[10px] text-gray-300 hover:border-[#b91c1c] hover:text-[#b91c1c] transition-colors"
                aria-label="LinkedIn"
              >
                <span>IN</span>
              </a>
              <a
                href="#home"
                className="w-8 h-8 rounded-full border border-gray-700 flex items-center justify-center text-[10px] text-gray-300 hover:border-[#b91c1c] hover:text-[#b91c1c] transition-colors"
                aria-label="Instagram"
              >
                <span>IG</span>
              </a>
            </div>
          </div>

          {/* Column 2: About (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#b91c1c]">About</h4>
            <ul className="space-y-2 text-xs">
              {['Company', 'Latest News', 'FAQ', 'Careers', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href="#home"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#b91c1c]">Services</h4>
            <ul className="space-y-2 text-xs">
              {['VIP Escorts', 'Hotel Outcalls', 'Dinner Dates', 'Overnight', 'Model Selection'].map((item, idx) => (
                <li key={`${item}-${idx}`}>
                  <a
                    href="#services"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#b91c1c]">Newsletter</h4>
            <p className="text-xs text-gray-400 leading-relaxed">
              Sign up for private updates, newly verified Karachi profiles, and special availability.
            </p>

            {subscribed ? (
              <div className="p-3 bg-red-950/60 border border-[#b91c1c] text-red-200 text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#b91c1c] shrink-0" />
                <span>Thank you for subscribing!</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletter} className="flex items-center gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full px-3.5 py-2.5 bg-neutral-900 border border-gray-700 text-xs text-white focus:outline-none focus:border-[#b91c1c] transition-colors placeholder:text-gray-500"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 bg-[#b91c1c] hover:bg-[#991b1b] text-white text-xs font-bold uppercase tracking-wider shrink-0 transition-colors flex items-center gap-1.5 shadow-sm"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Join</span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Sub-footer Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-gray-500">
          {/* Policy Links */}
          <div className="flex items-center gap-4 text-xs font-bold uppercase">
            <a href="#home" className="hover:text-[#b91c1c] transition-colors">
              Privacy
            </a>
            <span className="text-gray-700">•</span>
            <a href="#home" className="hover:text-[#b91c1c] transition-colors">
              Terms
            </a>
            <span className="text-gray-700">•</span>
            <a href="#contact" className="hover:text-[#b91c1c] transition-colors">
              Contact
            </a>
          </div>

          {/* Copyright text */}
          <div className="text-center sm:text-right">
            <p>© 2026 Karachi Models &amp; Escorts Agency. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
