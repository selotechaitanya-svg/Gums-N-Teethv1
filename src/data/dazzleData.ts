import { ServiceItem, Dentist, FaqItem, GalleryItem } from '../types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'dental-implants',
    number: '01',
    title: 'Dental implants',
    slug: 'dental-implants',
    description: 'Replacing missing teeth with implants.',
    image: 'https://cdn.prod.website-files.com/68cf02b36961feb9ad58fe8e/68d1c5e6c8b09bbc4ef6bf31_Surgery.webp',
    tags: ['Missing Teeth Replacement', 'Titanium Implants', 'Permanent Restoration']
  },
  {
    id: 'smile-makeover',
    number: '02',
    title: 'Smile makeover',
    slug: 'smile-makeover',
    description: 'Cosmetic treatments to improve your smile.',
    image: 'https://cdn.prod.website-files.com/68cf02b36961feb9ad58fe8e/68d1aa2d2c03d0d8e9b4c143_Therapy.webp',
    tags: ['Veneers', 'Aesthetic Design', 'Teeth Whitening']
  },
  {
    id: 'tooth-coloured-fillings',
    number: '03',
    title: 'Tooth-coloured fillings',
    slug: 'tooth-coloured-fillings',
    description: 'Natural-looking cavity fillings.',
    image: 'https://cdn.prod.website-files.com/68cf02b36961feb9ad58fe8e/68d1aa2d2c03d0d8e9b4c143_Therapy.webp',
    tags: ['Composite Fillings', 'Cavity Repair', 'Natural Aesthetics']
  },
  {
    id: 'wisdom-tooth-removal',
    number: '04',
    title: 'Wisdom tooth removal',
    slug: 'wisdom-tooth-removal',
    description: 'Extraction of impacted or problematic wisdom teeth.',
    image: 'https://cdn.prod.website-files.com/68cf02b36961feb9ad58fe8e/68d1c5e6c8b09bbc4ef6bf31_Surgery.webp',
    tags: ['Painless Extraction', 'Impacted Teeth', 'Oral Surgery']
  },
  {
    id: 'clear-aligners',
    number: '05',
    title: 'Clear aligners',
    slug: 'clear-aligners',
    description: 'Invisible teeth-straightening treatment.',
    image: 'https://cdn.prod.website-files.com/68cf02b36961feb9ad58fe8e/68d1c5c40e2514def9e1a92e_Orthodontics.webp',
    tags: ['Invisalign', 'Custom Aligners', 'Teeth Alignment']
  },
  {
    id: 'root-canal-treatment',
    number: '06',
    title: 'Root canal treatment (RCT)',
    slug: 'root-canal-treatment',
    description: 'Treating infected tooth pulp while saving the tooth.',
    image: 'https://cdn.prod.website-files.com/68cf02b36961feb9ad58fe8e/68d1aa2d2c03d0d8e9b4c143_Therapy.webp',
    tags: ['Pain Relief', 'Pulp Therapy', 'Tooth Preservation']
  },
  {
    id: 'metal-free-crowns',
    number: '07',
    title: 'Metal-free crowns',
    slug: 'metal-free-crowns',
    description: 'Tooth-coloured ceramic/zirconia crowns.',
    image: 'https://cdn.prod.website-files.com/68cf02b36961feb9ad58fe8e/68d1c5c40e2514def9e1a92e_Orthodontics.webp',
    tags: ['Zirconia Crowns', 'Ceramic Caps', 'Durable Aesthetics']
  },
  {
    id: 'gum-related-surgeries',
    number: '08',
    title: 'Gum-related surgeries',
    slug: 'gum-related-surgeries',
    description: 'Treatment for gum disease and other periodontal procedures.',
    image: 'https://cdn.prod.website-files.com/68cf02b36961feb9ad58fe8e/68d1c60c707af4676215f771_Periodontology.webp',
    tags: ['Periodontal Care', 'Flap Surgery', 'Gum Recession Repair']
  }
];

export const DENTISTS_DATA: Dentist[] = [
  {
    id: 'dr-mitul-mishra',
    name: 'Dr. Mitul Mishra',
    degrees: 'BDS, MDS',
    role: 'Consultant Periodontist & Implantologist',
    slug: 'dr-mitul-mishra',
    image: 'https://cdn.prod.website-files.com/68cf02b36961feb9ad58fe8e/68d15e73d463ff0dab03c509_portrait-01.webp',
    bio: 'Chief specialist at Gums N Teeth Dental Clinic, practicing as a Consultant Periodontist and Implantologist (BDS, MDS) with expertise in dental implants, gum therapy, and complex oral restorations.',
    experienceYears: 15,
    specialization: ['BDS, MDS', 'Consultant Periodontist', 'Implantologist', 'Periodontal Surgery']
  },
  {
    id: 'dr-prachi-mishra',
    name: 'Dr. Prachi Mishra',
    degrees: 'BDS',
    role: 'Dental Surgeon & Oral Cosmetologist',
    slug: 'dr-prachi-mishra',
    image: 'https://cdn.prod.website-files.com/68cf02b36961feb9ad58fe8e/68d15f2230282e438f70250f_portrait-02.webp',
    bio: 'Renowned Dental Surgeon (BDS) and specialist in Oral Cosmetology, delivering advanced aesthetic smile design, facial cosmetology, and gentle precision care.',
    experienceYears: 12,
    specialization: ['BDS', 'Dental Surgery', 'Oral Cosmetology', 'Smile Designing']
  }
];

export const FAQ_DATA: FaqItem[] = [
  {
    id: 'faq-1',
    number: '01',
    question: 'How often should I visit the dentist for a regular check-up?',
    answer: 'It is generally recommended to visit every six months for preventive care and professional cleaning.'
  },
  {
    id: 'faq-2',
    number: '02',
    question: 'What options are available for teeth whitening?',
    answer: 'Professional in-office whitening, take-home whitening kits, and custom trays are available depending on your needs.'
  },
  {
    id: 'faq-3',
    number: '03',
    question: 'How can I manage my fear of dental treatment?',
    answer: 'We provide a calm environment, gentle care, and sedation options for patients with dental anxiety.'
  },
  {
    id: 'faq-4',
    number: '04',
    question: 'Are there options other than braces for aligning teeth?',
    answer: 'Yes. Clear aligners such as Invisalign may be suitable depending on your orthodontic needs.'
  },
  {
    id: 'faq-5',
    number: '05',
    question: 'What are the signs of gum disease and how can it be prevented?',
    answer: 'Bleeding gums, swelling, bad breath, and gum recession are common signs. Good oral hygiene and regular dental visits help prevent it.'
  },
  {
    id: 'faq-6',
    number: '06',
    question: 'Do dental implants look and feel like natural teeth?',
    answer: 'Yes. Dental implants are designed to closely resemble natural teeth in appearance, strength, and function.'
  },
  {
    id: 'faq-7',
    number: '07',
    question: 'Can children receive preventive dental care?',
    answer: 'Yes. Regular examinations, fluoride treatments, and sealants help maintain healthy teeth from an early age.'
  },
  {
    id: 'faq-8',
    number: '08',
    question: 'How long does a dental crown typically last?',
    answer: 'With proper care, most crowns last between 10 and 15 years or longer.'
  }
];

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: 'gal-1',
    image: 'https://cdn.prod.website-files.com/68cd8c43866f068b45798eed/68d01ff770490f9312aceea9_gallery-01.webp',
    title: 'Modern Treatment Suite',
    category: 'Clinic Architecture'
  },
  {
    id: 'gal-2',
    image: 'https://cdn.prod.website-files.com/68cd8c43866f068b45798eed/68d01ff71c8715731f277af7_gallery-02.webp',
    title: 'High-Tech Dental Microscopy',
    category: 'Technology'
  },
  {
    id: 'gal-3',
    image: 'https://cdn.prod.website-files.com/68cd8c43866f068b45798eed/68d01ff7b58c409fcebffe54_gallery-03.webp',
    title: 'Pediatric Playroom',
    category: 'Kids Zone'
  },
  {
    id: 'gal-4',
    image: 'https://cdn.prod.website-files.com/68cd8c43866f068b45798eed/68d01ff7f6cbe30b17335eff_gallery-04.webp',
    title: 'Microscopic Examination',
    category: 'Diagnostics'
  },
  {
    id: 'gal-5',
    image: 'https://cdn.prod.website-files.com/68cd8c43866f068b45798eed/68d01ff74610290b46fa3b83_gallery-05.webp',
    title: 'Patient Smile Care',
    category: 'Aesthetic Care'
  },
  {
    id: 'gal-6',
    image: 'https://cdn.prod.website-files.com/68cd8c43866f068b45798eed/68d01ff73bbd011dcc86bcd9_gallery-06.webp',
    title: 'Surgical Suite & Garden View',
    category: 'Interior'
  }
];
