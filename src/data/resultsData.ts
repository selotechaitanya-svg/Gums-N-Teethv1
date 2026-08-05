export interface PatientResultCase {
  id: string;
  title: string;
  category: 'Dental Implants' | 'Smile Designing' | 'Teeth Whitening' | 'Gum Therapy' | 'Aligners & Braces';
  treatmentName: string;
  duration: string;
  patientAge: string;
  beforeImage: string;
  afterImage: string;
  description: string;
  highlights: string[];
}

export const PATIENT_RESULTS_DATA: PatientResultCase[] = [
  {
    id: 'case-1',
    title: 'Full Arch Dental Implant Restoration',
    category: 'Dental Implants',
    treatmentName: 'Dental Implants',
    duration: '2 Sessions',
    patientAge: '48 Yrs',
    beforeImage: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800',
    afterImage: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800',
    description: 'Patient presented with severely decayed molars and missing lower teeth. Restored complete chewing functionality with precision titanium implants and custom zirconia crowns.',
    highlights: ['Natural tooth translucency', 'Restored 100% chewing capability', 'Zero bone loss guarantee']
  },
  {
    id: 'case-2',
    title: 'Cosmetic Veneers & Smile Makeover',
    category: 'Smile Designing',
    treatmentName: 'Smile Designing',
    duration: '10 Days',
    patientAge: '32 Yrs',
    beforeImage: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=800',
    afterImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800',
    description: 'Corrected severe tooth discoloration, uneven alignment, and chipping across anterior teeth using ultra-thin porcelain veneers.',
    highlights: ['Minimal tooth enamel reduction', 'Custom shade matching', '10+ year stain resistance']
  },
  {
    id: 'case-3',
    title: 'Laser Teeth Whitening & Polishing',
    category: 'Teeth Whitening',
    treatmentName: 'Teeth Whitening',
    duration: '45 Minutes',
    patientAge: '27 Yrs',
    beforeImage: 'https://images.unsplash.com/photo-1571772996211-2f02c9727629?auto=format&fit=crop&q=80&w=800',
    afterImage: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=800',
    description: 'In-clinic Zoom LED teeth whitening eliminated years of coffee stains and fluorosis streaks in a single painless session.',
    highlights: ['8 shades brighter', 'Enamel-safe peroxide formula', 'Sensitivity-free treatment']
  },
  {
    id: 'case-4',
    title: 'Flap Surgery & Laser Gum Contouring',
    category: 'Gum Therapy',
    treatmentName: 'Laser Gum Therapy',
    duration: '2 Weeks',
    patientAge: '41 Yrs',
    beforeImage: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800',
    afterImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800',
    description: 'Treated severe periodontitis and gummy smile asymmetry using non-invasive diode laser gum recontouring and deep root planing.',
    highlights: ['Painless diode laser technique', 'Healthy pink gum tissue', 'Reduced pocket depths']
  },
  {
    id: 'case-5',
    title: 'Invisible Clear Aligners Correction',
    category: 'Aligners & Braces',
    treatmentName: 'Invisalign & Clear Aligners',
    duration: '7 Months',
    patientAge: '24 Yrs',
    beforeImage: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=800',
    afterImage: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=800',
    description: 'Fixed moderate crowding and midline gap without metal wires using custom 3D-scanned transparent aligners.',
    highlights: ['100% invisible clear trays', 'No food restrictions', 'Shortened treatment duration']
  }
];
