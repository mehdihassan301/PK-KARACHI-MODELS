import { useState } from 'react';
import { Eye, MessageSquare, Sparkles } from 'lucide-react';
import { SERVICES_LIST, WHATSAPP_URL } from '../data';
import { ServiceItem } from '../types';
import PhotoLightbox from './PhotoLightbox';

export default function ServicesPhotoGrid() {
  const [selectedItem, setSelectedItem] = useState<ServiceItem | null>(null);

  return (
    <section id="services" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block text-[11px] uppercase tracking-[0.25em] font-extrabold text-[#b91c1c]">
            What We Offer
          </span>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase text-gray-900 tracking-tight leading-tight mt-2 mb-3">
            Our Karachi Escorts Services
          </h2>

          <div className="h-1 w-20 bg-[#b91c1c] mx-auto mb-5"></div>

          <p className="text-sm sm:text-base text-gray-600">
            We offer a full range of companionship options tailored to different preferences and budgets:
          </p>
        </div>

        {/* 6 Photo Cards Grid - Artistic Flair Editorial Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES_LIST.map((item) => (
            <div
              key={item.id}
              id={`card-${item.id}`}
              className="group bg-white border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col"
            >
              {/* Image Container with Editorial Zoom & Overlay */}
              <div
                className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden bg-gray-100 cursor-pointer"
                onClick={() => setSelectedItem(item)}
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Tag Badge */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 bg-[#b91c1c] text-white shadow-sm">
                    <Sparkles className="w-3 h-3 text-white" />
                    {item.tag}
                  </span>
                </div>

                {/* Overlay with Model/Service Name */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent flex flex-col justify-end p-4 text-white">
                  <span className="text-[10px] tracking-widest uppercase font-semibold text-red-200">Karachi VIP</span>
                  <h3 className="text-base sm:text-lg font-black uppercase tracking-tight text-white">{item.title}</h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-xs sm:text-sm text-gray-600 line-clamp-2 leading-relaxed mb-5">
                    {item.description}
                  </p>
                </div>

                {/* Action Buttons Row */}
                <div className="pt-3 border-t border-gray-100 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedItem(item)}
                    className="w-full py-2.5 bg-gray-100 text-gray-800 text-[11px] font-bold uppercase tracking-wider hover:bg-[#b91c1c] hover:text-white transition-all flex items-center justify-center gap-1"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Portfolio</span>
                  </button>

                  <a
                    href={`${WHATSAPP_URL}?text=${encodeURIComponent(`Hello, I am interested in ${item.title} service in Karachi.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 bg-[#b91c1c] text-white text-[11px] font-bold uppercase tracking-wider hover:bg-[#991b1b] transition-all flex items-center justify-center gap-1 shadow-sm"
                  >
                    <MessageSquare className="w-3.5 h-3.5 fill-white" />
                    <span>Book Now</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox / Modal */}
      {selectedItem && (
        <PhotoLightbox
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
        />
      )}
    </section>
  );
}
