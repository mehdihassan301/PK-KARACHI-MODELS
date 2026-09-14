import type { SyntheticEvent } from 'react';
import { ServiceItem, PricingRow, AreaItem, StepItem, FaqItem } from './types';

export const CONTACT_PHONE = "+92 328 7377799";
export const CONTACT_PHONE_CLEAN = "923287377799";
export const WHATSAPP_URL = `https://wa.me/${CONTACT_PHONE_CLEAN}`;

// Subfolders under /public containing the uploaded photos
export const PHOTOS_DIR = "/photos";
export const IMAGES_DIR = "/images";

// Exact filenames as uploaded into public/photos and public/images
export const UPLOADED_FILENAMES = {
  photo1: "WhatsApp Image 2026-09-13 at 4.45.29 PM.jpeg",      // Model in brown dress
  photo2: "WhatsApp Image 2026-09-13 at 4.45.26 PM (2).jpeg",  // Model in striped turtleneck
  photo3: "WhatsApp Image 2026-09-13 at 4.45.26 PM (1).jpeg",  // Model in white kurti & jeans
  photo4: "WhatsApp Image 2026-09-13 at 4.45.26 PM.jpeg",      // Model in black outfit with bag
  photo5: "WhatsApp Image 2026-09-13 at 4.45.25 PM (1).jpeg",  // Model in off-shoulder top & denim
  photo6: "WhatsApp Image 2026-09-13 at 4.45.25 PM.jpeg",      // Model in maroon suit
};

// Clean web-safe URLs for the photos subfolder
export const UPLOADED_PHOTOS = {
  photo1: `${PHOTOS_DIR}/${encodeURI(UPLOADED_FILENAMES.photo1)}`,
  photo2: `${PHOTOS_DIR}/${encodeURI(UPLOADED_FILENAMES.photo2)}`,
  photo3: `${PHOTOS_DIR}/${encodeURI(UPLOADED_FILENAMES.photo3)}`,
  photo4: `${PHOTOS_DIR}/${encodeURI(UPLOADED_FILENAMES.photo4)}`,
  photo5: `${PHOTOS_DIR}/${encodeURI(UPLOADED_FILENAMES.photo5)}`,
  photo6: `${PHOTOS_DIR}/${encodeURI(UPLOADED_FILENAMES.photo6)}`,
};

// Clean web-safe URLs for the images subfolder
export const UPLOADED_IMAGES = {
  photo1: `${IMAGES_DIR}/${encodeURI(UPLOADED_FILENAMES.photo1)}`,
  photo2: `${IMAGES_DIR}/${encodeURI(UPLOADED_FILENAMES.photo2)}`,
  photo3: `${IMAGES_DIR}/${encodeURI(UPLOADED_FILENAMES.photo3)}`,
  photo4: `${IMAGES_DIR}/${encodeURI(UPLOADED_FILENAMES.photo4)}`,
  photo5: `${IMAGES_DIR}/${encodeURI(UPLOADED_FILENAMES.photo5)}`,
  photo6: `${IMAGES_DIR}/${encodeURI(UPLOADED_FILENAMES.photo6)}`,
};

export const MODEL_PHOTOS = [
  UPLOADED_PHOTOS.photo1,
  UPLOADED_PHOTOS.photo2,
  UPLOADED_PHOTOS.photo3,
  UPLOADED_PHOTOS.photo4,
  UPLOADED_PHOTOS.photo5,
  UPLOADED_PHOTOS.photo6,
];

export const HERO_IMG = UPLOADED_PHOTOS.photo2;
export const ABOUT_IMG_1 = UPLOADED_PHOTOS.photo1;
export const ABOUT_IMG_2 = UPLOADED_PHOTOS.photo4;

/**
 * Image fallback helper: If an image fails from /photos/, it tries /images/ (and vice versa)
 */
export function handleImageFallback(e: SyntheticEvent<HTMLImageElement, Event>) {
  const target = e.currentTarget;
  if (!target.dataset.triedFallback) {
    target.dataset.triedFallback = 'true';
    if (target.src.includes('/photos/')) {
      target.src = target.src.replace('/photos/', '/images/');
    } else if (target.src.includes('/images/')) {
      target.src = target.src.replace('/images/', '/photos/');
    }
  }
}

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: "vip-luxury",
    title: "VIP & Luxury Escorts",
    image: UPLOADED_PHOTOS.photo4,
    alt: "karachi call girls vip luxury",
    tag: "High Profile",
    description: "Sophisticated, cultured, and charming top-tier companions for luxury engagements, fine dinners, and premier hotel appointments."
  },
  {
    id: "independent-call-girls",
    title: "Independent Call Girls",
    image: UPLOADED_PHOTOS.photo2,
    alt: "karachi independent escorts",
    tag: "Independent",
    description: "Direct, genuine, screened independent companions offering warm chemistry, personalized attention, and relaxed companionship."
  },
  {
    id: "vip-karachi-escorts",
    title: "VIP Karachi Escorts",
    image: UPLOADED_PHOTOS.photo1,
    alt: "vip escorts in karachi",
    tag: "Exclusive",
    description: "Elite models and pageant-level companions with exquisite etiquette, punctuality, and complete discretion."
  },
  {
    id: "gfe-companionship",
    title: "GFE-Style Companionship",
    image: UPLOADED_PHOTOS.photo3,
    alt: "karachi escort gfe companionship",
    tag: "Intimate & Caring",
    description: "Sweet, attentive, and affectionate girlfriend-experience companion services creating memorable and comfortable moments."
  },
  {
    id: "hotel-outcall",
    title: "Hotel & Outcall Servic",
    image: UPLOADED_PHOTOS.photo6,
    alt: "hotel outcall service in karachi",
    tag: "24/7 Outcall",
    description: "Swift, safe, and discreet visits directly to major luxury hotels, business suites, and private upscale residences."
  },
  {
    id: "short-time-hourly",
    title: "Short-Time / Hourly Bookings",
    image: UPLOADED_PHOTOS.photo5,
    alt: "short time hourly escorts karachi",
    tag: "Flexible",
    description: "Flexible schedules tailored around your availability, from single hours to extended multi-hour and overnight packages."
  }
];

export const PRICING_DATA: PricingRow[] = [
  {
    serviceType: "Short / Hourly Meet",
    duration: "1–2 hours",
    rangePkr: "25,000 – 55,000"
  },
  {
    serviceType: "Extended Session",
    duration: "3–4 hours",
    rangePkr: "40,000 – 70,000"
  },
  {
    serviceType: "Overnight / Full Night",
    duration: "8–10 hours",
    rangePkr: "60,000 – 120,000+"
  },
  {
    serviceType: "VIP / Premium Model",
    duration: "Custom",
    rangePkr: "70,000 – 150,000+"
  }
];

export const AREAS_SERVED: AreaItem[] = [
  {
    id: "premium",
    title: "Premium & High-Demand Areas",
    description: "DHA Phase 1–8, Clifton (including Bath Island, Zamzama, Seaview), PECHS, Bahria Town, Defence View, and surrounding localities."
  },
  {
    id: "central",
    title: "Central & Popular Residential Areas",
    description: "Gulshan-e-Iqbal, Gulistan-e-Johar, Bahadurabad, North Nazimabad, Federal B Area, Saddar, Garden, Tariq Road, Shahrah-e-Faisal."
  },
  {
    id: "other",
    title: "Other Localities",
    description: "Malir, Korangi, Landhi, Model Colony, Orangi, Lyari, Cantt, and major industrial/commercial zones on request."
  },
  {
    id: "hotels",
    title: "Major Hotels & Guest Houses",
    description: "Pearl Continental, Marriott, Mövenpick, Avari Towers, Ramada, Beach Luxury, Regent Plaza, and well-known guest houses in Clifton and DHA. We understand hotel protocols and arrange discreet arrivals."
  }
];

export const BOOKING_STEPS: StepItem[] = [
  {
    stepNumber: 1,
    title: "Contact Us",
    description: "WhatsApp us with your preferred area, time, and any preferences (age range, look, duration)."
  },
  {
    stepNumber: 2,
    title: "Receive Profiles",
    description: "Receive current available profiles with real photos."
  },
  {
    stepNumber: 3,
    title: "Confirm Booking",
    description: "Confirm the companion, timing, and location."
  },
  {
    stepNumber: 4,
    title: "Arrival Confirmation",
    description: "Receive arrival confirmation and meet discreetly."
  },
  {
    stepNumber: 5,
    title: "Enjoy the Experience",
    description: "Enjoy the experience with full privacy."
  }
];

export const WHY_CHOOSE_POINTS = [
  {
    title: "Verified real profiles",
    text: "Every companion is screened; photos match the person who arrives"
  },
  {
    title: "Fast response time",
    text: "Average reply under 10–15 minutes on WhatsApp, even late night"
  },
  {
    title: "Safety & hygiene first",
    text: "Clean, well-groomed companions; clear consent and professional boundaries"
  },
  {
    title: "Full discretion",
    text: "No public coordination, private WhatsApp handling, cash payment preferred for privacy"
  },
  {
    title: "Local knowledge",
    text: "We know hotel policies at Mövenpick, Pearl Continental, Marriott, Avari, and guest houses across Clifton and DHA"
  },
  {
    title: "Transparent communication",
    text: "You see current availability and approximate rates before confirming"
  },
  {
    title: "Flexible options",
    text: "Hourly, short meet, overnight, and multi-day arrangements"
  }
];

export const FAQ_DATA: FaqItem[] = [
  {
    question: "Are the photos real?",
    answer: "Yes. We only share current, verified photos of the actual companions available. Fake or outdated pictures are not used."
  },
  {
    question: "How fast can you arrange an escort?",
    answer: "In DHA, Clifton, PECHS and central areas, same-day and often same-hour bookings are common when profiles are free. Late-night availability is strong."
  },
  {
    question: "Is the service discreet and safe?",
    answer: "Discretion is our highest priority. All coordination stays on private WhatsApp. Companions are screened for professionalism and hygiene. Cash payment protects privacy."
  },
  {
    question: "Do you serve hotels and private residences?",
    answer: "Yes — both. We regularly arrange outcalls to major hotels and private homes across Karachi."
  },
  {
    question: "What payment methods do you accept?",
    answer: "Cash is preferred and most common for maximum privacy. Details are confirmed at booking."
  },
  {
    question: "Can I book for multiple hours or overnight?",
    answer: "Absolutely. Hourly, multi-hour, and full-night options are available. Longer bookings are often better value."
  },
  {
    question: "Do you cover all of Karachi?",
    answer: "Yes. Core service is strongest in DHA, Clifton, Gulshan, PECHS and Bahria Town, but we routinely serve Malir, Korangi, North Nazimabad, Saddar and most other localities."
  },
  {
    question: "Are there any hidden charges?",
    answer: "No. The rate discussed and confirmed is the rate you pay. Transport or special requests (if any) are clarified upfront."
  },
  {
    question: "What if I need to change or cancel?",
    answer: "Contact us as early as possible. We handle changes reasonably when notice is given."
  }
];
