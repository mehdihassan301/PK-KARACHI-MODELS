import { PRICING_DATA, WHATSAPP_URL, CONTACT_PHONE } from '../data';
import { MessageSquare } from 'lucide-react';

export default function PricingSection() {
  return (
    <section id="pricing" className="py-16 sm:py-24 bg-[#f8f9fa] border-b border-gray-200 relative">
      <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-block text-[11px] uppercase tracking-[0.25em] font-extrabold text-[#b91c1c]">
            Clear Rates
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase text-gray-900 tracking-tight leading-tight mt-2 mb-3">
            Transparent Pricing Ranges
          </h2>
          <div className="h-1 w-20 bg-[#b91c1c] mx-auto mb-5"></div>
          <p className="text-sm sm:text-base text-gray-600 max-w-[650px] mx-auto leading-relaxed">
            Unlike most competitors who hide rates until the last moment, we give clear approximate
            ranges so you can plan with confidence.
          </p>
        </div>

        {/* Pricing Table */}
        <div className="bg-white overflow-hidden shadow-sm border border-gray-200">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="bg-[#b91c1c] text-white">
                  <th className="py-4 px-5 text-xs font-bold uppercase tracking-wider">
                    Service Type
                  </th>
                  <th className="py-4 px-5 text-xs font-bold uppercase tracking-wider">
                    Duration
                  </th>
                  <th className="py-4 px-5 text-xs font-bold uppercase tracking-wider text-right sm:text-left">
                    Approximate Range (PKR)
                  </th>
                </tr>
              </thead>
              <tbody>
                {PRICING_DATA.map((row, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-red-50/40 transition-colors border-b border-gray-200 last:border-b-0"
                  >
                    <td className="py-4 px-5 text-sm font-semibold text-gray-900 uppercase tracking-tight">
                      {row.serviceType}
                    </td>
                    <td className="py-4 px-5 text-xs sm:text-sm text-gray-600">
                      {row.duration}
                    </td>
                    <td className="py-4 px-5 text-sm font-black text-[#b91c1c] text-right sm:text-left whitespace-nowrap">
                      {row.rangePkr}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pricing Note */}
        <div className="mt-8 bg-white p-6 sm:p-7 border-l-4 border-[#b91c1c] border-y border-r border-gray-200 shadow-sm">
          <p className="text-xs sm:text-sm text-gray-600 mb-3 leading-relaxed">
            Final rate depends on the specific companion, location (DHA/Clifton vs other areas),
            time of day, and any special requests.
          </p>
          <p className="text-xs sm:text-sm text-gray-600 mb-3 leading-relaxed">
            Payment is typically cash to the companion upon meeting. No hidden agency fees after
            confirmation.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <span className="text-xs sm:text-sm text-gray-800 font-semibold">
              Contact us on WhatsApp for exact current availability and pricing →
            </span>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[#b91c1c] hover:underline font-bold text-xs sm:text-sm uppercase tracking-wider"
            >
              <MessageSquare className="w-4 h-4 fill-[#b91c1c]" />
              <span>{CONTACT_PHONE}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
