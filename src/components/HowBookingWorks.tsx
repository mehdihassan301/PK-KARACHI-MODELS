import { BOOKING_STEPS, WHATSAPP_URL } from '../data';
import { Sparkles, MessageSquare } from 'lucide-react';

export default function HowBookingWorks() {
  return (
    <section id="booking" className="py-16 sm:py-24 bg-[#f8f9fa] border-b border-gray-200 relative">
      <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-[11px] uppercase tracking-[0.25em] font-extrabold text-[#b91c1c]">
            Simple &amp; Private
          </span>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase text-gray-900 tracking-tight leading-tight mt-2 mb-3">
            How Booking Works
          </h2>

          <div className="h-1 w-20 bg-[#b91c1c] mx-auto mb-5"></div>

          <p className="text-sm sm:text-base text-gray-600">
            A seamless, discreet 5-step process designed for client comfort and security.
          </p>
        </div>

        {/* Steps List */}
        <div className="flex flex-col gap-4">
          {BOOKING_STEPS.map((step) => (
            <div
              key={step.stepNumber}
              id={`step-${step.stepNumber}`}
              className="flex items-start gap-4 sm:gap-5 bg-white p-5 sm:p-6 border border-gray-200 shadow-sm transition-all"
            >
              <div className="w-9 h-9 bg-[#b91c1c] text-white flex items-center justify-center text-sm font-black shrink-0">
                {step.stepNumber}
              </div>

              <div className="flex-1">
                <h3 className="text-sm sm:text-base font-black uppercase tracking-tight text-gray-900 mb-1">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Booking Note Box */}
        <div className="mt-8 bg-white p-6 sm:p-7 border-l-4 border-[#b91c1c] border-y border-r border-gray-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-semibold text-xs sm:text-sm text-gray-900 uppercase tracking-tight mb-1">
              Ready to meet your chosen companion? Message us privately to see currently available profiles.
            </p>
            <span className="text-xs text-gray-500">Strict confidentiality maintained on WhatsApp at all times.</span>
          </div>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#b91c1c] hover:bg-[#991b1b] text-white px-6 py-3 text-xs font-bold uppercase tracking-wider shadow-sm transition-all shrink-0"
          >
            <MessageSquare className="w-4 h-4 fill-white" />
            <span>Message Now</span>
          </a>
        </div>
      </div>
    </section>
  );
}
