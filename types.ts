
export interface Course {
  id: string;
  title: string;
  level: string;
  description: string;
  price: string;
  tag: string;
}

export interface Testimonial {
  id: number;
  name: string;
  text: string;
  role: string;
  image: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface SquarespaceBlockGuide {
  sectionName: string;
  blockType: string;
  settings: string;
  objective: string;
}
