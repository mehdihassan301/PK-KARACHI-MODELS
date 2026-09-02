import { CheckCircle2, Shield } from 'lucide-react';
import { WHY_CHOOSE_POINTS } from '../data';

export default function WhyChooseUs() {
  return (
    <section className="py-16 sm:py-24 bg-[#f8f9fa] border-y border-gray-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-[11px] uppercase tracking-[0.25em] font-extrabold text-[#b91c1c]">
            Client First Standards
          </span>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase text-gray-900 tracking-tight leading-tight mt-2 mb-3">
            Why Customers in Karachi Choose Us Over Other Escort Services
          </h2>

          <div className="h-1 w-20 bg-[#b91c1c] mx-auto mb-5"></div>

          <p className="text-sm sm:text-base text-gray-600">
            Most agencies rely on stock photos, vague promises, and slow replies. We focus on standards that matter to local clients:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-12">
          {WHY_CHOOSE_POINTS.map((point, idx) => (
            <div
              key={idx}
              className="flex items-start gap-4 p-5 sm:p-6 bg-white border border-gray-200 shadow-sm"
            >
              <div className="w-8 h-8 bg-[#b91c1c] text-white flex items-center justify-center shrink-0 mt-0.5">
                <CheckCircle2 className="w-4 h-4 text-white" />
              </div>
              <div>
                <h3 className="text-sm font-black uppercase tracking-tight text-gray-900 mb-1">{point.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{point.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white p-6 sm:p-8 border-l-4 border-[#b91c1c] border-y border-r border-gray-200 shadow-sm">
          <p className="text-gray-800 text-sm sm:text-base italic leading-relaxed text-center sm:text-left">
            "Clients repeatedly tell us they return because the experience matches what was promised — something many other Karachi escort services fail to deliver."
          </p>
        </div>
      </div>
    </section>
  );
}
