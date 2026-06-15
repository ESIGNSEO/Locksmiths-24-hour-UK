export interface PriceItem {
  id: string;
  name: string;
  priceDisplay: string;
  description: string;
  isEstimated: boolean;
  category: 'emergency' | 'repair' | 'installation' | 'other';
}

export const locksmithPrices: PriceItem[] = [
  {
    id: 'lockout',
    name: 'Locked Out / Gain Entry',
    priceDisplay: '£59 - £250',
    description: 'Emergency gain entry services for residential and commercial doors. Non-destructive entry is always prioritized.',
    isEstimated: true,
    category: 'emergency'
  },
  {
    id: 'lock-repair',
    name: 'Lock Repair',
    priceDisplay: '£59 - £249',
    description: 'Professional repair of damaged, jammed, or worn lock mechanisms for all types of wooden and composite doors.',
    isEstimated: true,
    category: 'repair'
  },
  {
    id: 'upvc-adjust',
    name: 'uPVC Door Lock Adjustment',
    priceDisplay: '£79 - £229',
    description: 'Alignment and mechanical adjustment of misaligned composite and uPVC door locking tracks for smooth operation.',
    isEstimated: false,
    category: 'repair'
  },
  {
    id: 'lock-change',
    name: 'Lock Change (Supply & Fit)',
    priceDisplay: '£88 - £475+',
    description: 'Replacement and installation of premium lock cylinders. Price includes call-out, supply of new locks, and expert fitting.',
    isEstimated: true,
    category: 'installation'
  },
  {
    id: 'standard-deadbolt',
    name: 'Standard Deadbolt & Cylinders',
    priceDisplay: '£29 - £299+',
    description: 'Supply and installation of standard rim cylinders, euro cylinders, and residential deadbolt cylinders.',
    isEstimated: true,
    category: 'installation'
  },
  {
    id: 'bs-deadbolt',
    name: 'B.S Deadbolt & Cylinders',
    priceDisplay: '£109 - £350+',
    description: 'Insurance-approved high-security locks meeting British Standard BS3621, carrying the official Kitemark logo.',
    isEstimated: true,
    category: 'installation'
  },
  {
    id: 'gearbox-mechanism',
    name: 'Gearbox Mechanism / Full Multi-point',
    priceDisplay: '£89 - £375+',
    description: 'Replacement of faulty multipoint locking gearboxes or full lock systems on uPVC and composite doors.',
    isEstimated: true,
    category: 'repair'
  },
  {
    id: 'car-lockout',
    name: 'Car Lockout Assistance',
    priceDisplay: '£99 - £220',
    description: 'Non-destructive vehicle entry to retrieve keys locked inside cars or vans. Depends on vehicle make and model.',
    isEstimated: false,
    category: 'emergency'
  },
  {
    id: 'assessment-fee',
    name: 'Assessment Fee / Cancellation Fee',
    priceDisplay: '£49.00',
    description: 'Flat rate charged for site diagnostic assessment or standard cancellation after engineer has been dispatched.',
    isEstimated: false,
    category: 'other'
  }
];
