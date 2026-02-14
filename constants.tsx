
import React from 'react';
import { Course, Testimonial, FAQItem, SquarespaceBlockGuide } from './types';

export const COURSES: Course[] = [
  {
    id: '1',
    title: 'General English',
    level: 'A1 - C2',
    description: 'Master the fundamentals of grammar and expand your vocabulary through active communication.',
    price: 'From $120/mo',
    tag: 'Popular'
  },
  {
    id: '2',
    title: 'Business English',
    level: 'B2 - C2',
    description: 'Perfect for professionals looking to enhance their negotiation and presentation skills in English.',
    price: 'From $180/mo',
    tag: 'Professional'
  },
  {
    id: '3',
    title: 'Exam Preparation',
    level: 'IELTS / TOEFL',
    description: 'Intensive training focused on the strategies needed to ace international English certificates.',
    price: 'From $200/mo',
    tag: 'Intensive'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Carlos Rivera",
    role: "Marketing Manager",
    text: "Thanks to this academy, I was able to land a job in London. The conversation-focused method is exactly what I needed.",
    image: "https://picsum.photos/id/64/100/100"
  },
  {
    id: 2,
    name: "Elena Gómez",
    role: "Student",
    text: "I used to be afraid of speaking English, but the teachers here make you feel so comfortable that you forget you're learning.",
    image: "https://picsum.photos/id/65/100/100"
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "How do I know my current level?",
    answer: "You can take our free online level test right here on the website, or visit us for a personalized placement interview."
  },
  {
    question: "Do you offer online classes?",
    answer: "Yes! We have a hybrid model where you can choose between in-person or live online sessions."
  },
  {
    question: "What is the maximum class size?",
    answer: "We keep our groups small, typically between 6 to 10 students, to ensure everyone gets enough speaking time."
  }
];

export const SQUARESPACE_GUIDES: SquarespaceBlockGuide[] = [
  {
    sectionName: "Hero Section",
    blockType: "Section with Background Image (L-Width)",
    settings: "Overlap Header: True, Content Alignment: Center/Left",
    objective: "Immediate value proposition and CTA."
  },
  {
    sectionName: "Benefits",
    blockType: "List Section (Content Link)",
    settings: "Style: Banner/Simple, Elements: Image + Text",
    objective: "Highlight USP (Unique Selling Points) quickly."
  },
  {
    sectionName: "Courses",
    blockType: "Grid Gallery or Card List",
    settings: "Columns: 3, Aspect Ratio: 3:2",
    objective: "Display product hierarchy and pricing."
  }
];
