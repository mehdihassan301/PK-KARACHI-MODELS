import { AREAS_SERVED } from '../data';
import { MapPin } from 'lucide-react';

export default function AreasServedSection() {
  return (
    <section id="areas" className="py-16 sm:py-24 bg-white relative border-b border-gray-200">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-[11px] uppercase tracking-[0.25em] font-extrabold text-[#b91c1c]">
            Citywide Coverage
          </span>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase text-gray-900 tracking-tight leading-tight mt-2 mb-3">
            Areas We Serve in Karachi
          </h2>

          <div className="h-1 w-20 bg-[#b91c1c] mx-auto mb-5"></div>

          <p className="text-sm sm:text-base text-gray-600 max-w-[600px] mx-auto">
            We cover the entire city with priority and fast response in premium zones.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {AREAS_SERVED.map((area) => (
            <div
              key={area.id}
              id={`area-${area.id}`}
              className="bg-white p-6 sm:p-7 border border-gray-200 shadow-sm transition-all flex flex-col"
            >
              <h3 className="text-sm sm:text-base font-black uppercase tracking-tight text-gray-900 mb-2.5 flex items-center gap-2.5">
                <span className="w-2 h-2 bg-[#b91c1c] shrink-0" />
                <span>{area.title}</span>
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}
        </div>

        {/* Areas Note */}
        <div className="mt-9 bg-white p-5 sm:p-6 text-center border-l-4 border-[#b91c1c] border-y border-r border-gray-200 shadow-sm text-xs sm:text-sm text-gray-700">
          <span>Need service in an unlisted locality or private guest house? </span>
          <strong className="text-[#b91c1c] font-bold uppercase tracking-wider">WhatsApp us directly for custom dispatch arrangements.</strong>
        </div>
      </div>
    </section>
  );
}
