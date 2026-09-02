import { Clock, Hotel, Sparkles } from 'lucide-react';

export default function FeaturesBanner() {
  const features = [
    {
      id: 'feature-quick-booking',
      icon: Clock,
      title: 'Quick Booking',
      description:
        'Quick and simple booking process. Contact us anytime to arrange a meeting with Karachi Escorts according to your preferred time and location.',
    },
    {
      id: 'feature-hotel-outcall',
      icon: Hotel,
      title: 'Hotel & Outcall Service',
      description:
        'Our escorts provide convenient outcall service to hotels and private locations in DHA, Clifton, PECHS, Gulshan, and other major areas of Karachi.',
    },
    {
      id: 'feature-vip-girls',
      icon: Sparkles,
      title: 'VIP Call Girls',
      description:
        'Premium Karachi Escorts available for private meetings, hotel visits, and overnight bookings across the city. Choose from a wide selection of attractive and professional companions.',
    },
  ];

  return (
    <section className="relative -mt-6 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white shadow-sm border border-gray-200 p-6 sm:p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:divide-x md:divide-gray-200">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                id={item.id}
                className={`flex items-start gap-4 ${
                  index > 0 ? 'md:pl-8' : ''
                } transition-all duration-300`}
              >
                <div className="w-12 h-12 bg-[#b91c1c] text-white flex items-center justify-center shrink-0 shadow-sm">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-black uppercase tracking-tight text-gray-900 mb-1.5">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
