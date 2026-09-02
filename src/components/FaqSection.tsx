import { useState } from 'react';
import { FAQ_DATA } from '../data';
import { HelpCircle } from 'lucide-react';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-white relative border-b border-gray-200">
      <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-[11px] uppercase tracking-[0.25em] font-extrabold text-[#b91c1c]">
            Karachi Escorts
          </span>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase text-gray-900 tracking-tight leading-tight mt-2 mb-3">
            Frequently Asked Questions
          </h2>

          <div className="h-1 w-20 bg-[#b91c1c] mx-auto mb-5"></div>

          <p className="text-sm sm:text-base text-gray-600">
            Everything you need to know about booking, outcalls, privacy, and payment.
          </p>
        </div>

        {/* Accordion List */}
        <div className="flex flex-col gap-3">
          {FAQ_DATA.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                id={`faq-item-${index}`}
                className="bg-white border border-gray-200 shadow-sm overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left py-4 px-5 sm:px-6 text-xs sm:text-sm font-black uppercase tracking-tight text-gray-900 cursor-pointer flex justify-between items-center gap-4 transition-colors hover:text-[#b91c1c]"
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <span className="text-xl font-bold text-[#b91c1c] shrink-0 leading-none select-none">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                <div
                  className={`transition-all duration-300 ease-in-out px-5 sm:px-6 ${
                    isOpen
                      ? 'max-h-96 pb-5 pt-0 opacity-100'
                      : 'max-h-0 pb-0 pt-0 opacity-0 overflow-hidden'
                  }`}
                >
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
