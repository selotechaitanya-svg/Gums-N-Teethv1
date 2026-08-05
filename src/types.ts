export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  slug: string;
  description: string;
  image: string;
  tags: string[];
}

export interface Dentist {
  id: string;
  name: string;
  role: string;
  degrees: string;
  slug: string;
  image: string;
  bio: string;
  experienceYears: number;
  specialization: string[];
}

export interface FaqItem {
  id: string;
  number: string;
  question: string;
  answer: string;
}

export interface GalleryItem {
  id: string;
  image: string;
  title: string;
  category: string;
}

export interface GoogleReview {
  id: string;
  authorName: string;
  authorPhoto: string;
  rating: number; // 4 or 5
  relativeTime: string;
  text: string;
  isVerified?: boolean;
}

export interface AppointmentFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}
