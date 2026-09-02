import { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageSquare } from 'lucide-react';
import { LOGO_URL, WHATSAPP_URL, CONTACT_PHONE } from '../data';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Areas', href: '#areas' },
    { name: 'How It Works', href: '#booking' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      id="site-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm'
          : 'bg-white'
      }`}
    >
      {/* Artistic Flair Top Announcement Bar */}
      <div className="bg-[#b91c1c] text-white text-[11px] px-4 sm:px-8 py-1.5 hidden md:flex justify-between items-center uppercase tracking-widest font-bold">
        <span>Leading Modeling &amp; VIP Companionship in Karachi</span>
        <div className="flex items-center gap-6">
          <a href="#about" className="hover:opacity-80 transition-opacity">Discreet &amp; Verified</a>
          <a href="#areas" className="hover:opacity-80 transition-opacity">DHA • Clifton • PECHS</a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity font-extrabold flex items-center gap-1.5"
          >
            <span>WhatsApp: {CONTACT_PHONE}</span>
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="border-b border-gray-200 px-4 sm:px-8 py-3.5 flex justify-between items-center shadow-sm">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
          {/* Logo with Artistic Flair Monogram Badge */}
          <a href="#home" id="nav-logo" className="flex items-center gap-3 group">
            <div className="bg-[#b91c1c] w-10 h-10 flex items-center justify-center text-white font-black text-xl shrink-0 shadow-sm transition-transform group-hover:scale-105">
              PK
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-lg sm:text-xl font-black tracking-tighter text-gray-900 group-hover:text-[#b91c1c] transition-colors uppercase">
                KARACHI
              </span>
              <span className="text-[9px] sm:text-[10px] tracking-[0.3em] font-bold text-gray-400 uppercase">
                MODELS &amp; VIP ESCORTS
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links - Bold Uppercase Style */}
          <div className="hidden lg:flex items-center space-x-7" aria-label="Main Navigation">
            {navLinks.map((link, idx) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-[13px] font-bold uppercase tracking-tight transition-colors py-1 ${
                  idx === 0
                    ? 'text-[#b91c1c] border-b-2 border-[#b91c1c]'
                    : 'text-gray-700 hover:text-[#b91c1c]'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Action: Phone & WhatsApp */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${CONTACT_PHONE.replace(/\s+/g, '')}`}
              id="header-phone-btn"
              className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-gray-800 hover:text-[#b91c1c] hover:border-[#b91c1c] transition-all py-2 px-3.5 border border-gray-200 bg-gray-50 hover:bg-white"
            >
              <Phone className="w-3.5 h-3.5 text-[#b91c1c]" />
              <span>{CONTACT_PHONE}</span>
            </a>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              id="header-whatsapp-btn"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe57] text-white px-5 py-2 text-xs font-bold uppercase tracking-wider shadow-sm hover:shadow transition-all duration-300"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 sm:gap-3 lg:hidden">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-[#25D366] text-white px-3 py-1.5 text-xs font-bold uppercase tracking-wider"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-white" />
              <span>WhatsApp</span>
            </a>

            <button
              type="button"
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-900 hover:text-[#b91c1c] focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div id="mobile-nav-menu" className="lg:hidden bg-white border-b border-gray-200 px-4 pt-3 pb-6 space-y-3 shadow-xl">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link, idx) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2 text-xs font-bold uppercase tracking-wider rounded transition-colors ${
                  idx === 0
                    ? 'text-[#b91c1c] bg-red-50'
                    : 'text-gray-800 hover:text-[#b91c1c] hover:bg-gray-50'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-gray-200 flex flex-col gap-2">
            <a
              href={`tel:${CONTACT_PHONE.replace(/\s+/g, '')}`}
              className="flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-bold uppercase text-gray-800 bg-gray-50 border border-gray-200"
            >
              <Phone className="w-4 h-4 text-[#b91c1c]" />
              <span>{CONTACT_PHONE}</span>
            </a>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe57] text-white py-2.5 px-4 text-xs font-bold uppercase tracking-wider shadow-sm"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
