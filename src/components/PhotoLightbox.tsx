import { X, MessageSquare, Sparkles } from 'lucide-react';
import { ServiceItem } from '../types';
import { WHATSAPP_URL } from '../data';

interface Props {
  item: ServiceItem;
  onClose: () => void;
}

export default function PhotoLightbox({ item, onClose }: Props) {
  return (
    <div
      id="photo-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        id="photo-modal-card"
        className="relative bg-white overflow-hidden max-w-2xl w-full shadow-2xl border border-gray-300 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3 right-3 z-20 w-8 h-8 bg-black/70 hover:bg-black text-white flex items-center justify-center transition-colors"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Image */}
        <div className="relative bg-black max-h-[55vh] flex items-center justify-center overflow-hidden">
          <img
            src={item.image}
            alt={item.alt}
            className="w-full h-full object-contain max-h-[55vh]"
          />
          <div className="absolute top-3 left-3">
            <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 bg-[#b91c1c] text-white shadow">
              <Sparkles className="w-3 h-3" />
              {item.tag}
            </span>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6 overflow-y-auto">
          <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-gray-900 mb-2">{item.title}</h3>
          <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-6">
            {item.description}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-gray-200">
            <div className="text-[11px] uppercase tracking-wider text-gray-500 font-semibold text-center sm:text-left">
              Real photo screening • 100% Discretion guaranteed
            </div>

            <a
              href={`${WHATSAPP_URL}?text=${encodeURIComponent(`Hi, I would like to book ${item.title} in Karachi.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#b91c1c] hover:bg-[#991b1b] text-white px-6 py-2.5 text-xs font-bold uppercase tracking-wider shadow-sm hover:shadow transition-all"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              <span>Book Profile on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
