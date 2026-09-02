export interface ServiceItem {
  id: string;
  title: string;
  image: string;
  alt: string;
  tag: string;
  description: string;
}

export interface PricingRow {
  serviceType: string;
  duration: string;
  rangePkr: string;
}

export interface AreaItem {
  id: string;
  title: string;
  description: string;
}

export interface StepItem {
  stepNumber: number;
  title: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
