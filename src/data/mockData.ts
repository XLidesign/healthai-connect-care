
export interface HealthData {
  date: string;
  heartRate: number;
  steps: number;
  sleepHours: number;
  caloriesBurned: number;
  bloodPressure: {
    systolic: number;
    diastolic: number;
  };
  bloodOxygen: number;
}

export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  hospital: string;
  rating: number;
  reviewCount: number;
  availableDays: string[];
  image: string;
}

export interface MedicineItem {
  id: string;
  name: string;
  dosage: string;
  price: number;
  description: string;
  image: string;
}

export interface Bill {
  id: string;
  date: string;
  hospital: string;
  amount: number;
  status: 'paid' | 'pending' | 'overdue';
  description: string;
}

export const healthData: HealthData[] = [
  {
    date: '2025-04-01',
    heartRate: 72,
    steps: 8254,
    sleepHours: 7.5,
    caloriesBurned: 2100,
    bloodPressure: {
      systolic: 120,
      diastolic: 80,
    },
    bloodOxygen: 98,
  },
  {
    date: '2025-04-02',
    heartRate: 68,
    steps: 10345,
    sleepHours: 8,
    caloriesBurned: 2300,
    bloodPressure: {
      systolic: 118,
      diastolic: 78,
    },
    bloodOxygen: 99,
  },
  {
    date: '2025-04-03',
    heartRate: 70,
    steps: 7234,
    sleepHours: 6.5,
    caloriesBurned: 1950,
    bloodPressure: {
      systolic: 122,
      diastolic: 82,
    },
    bloodOxygen: 97,
  },
  {
    date: '2025-04-04',
    heartRate: 75,
    steps: 9120,
    sleepHours: 7,
    caloriesBurned: 2250,
    bloodPressure: {
      systolic: 125,
      diastolic: 83,
    },
    bloodOxygen: 98,
  },
  {
    date: '2025-04-05',
    heartRate: 71,
    steps: 8760,
    sleepHours: 7.8,
    caloriesBurned: 2180,
    bloodPressure: {
      systolic: 119,
      diastolic: 79,
    },
    bloodOxygen: 99,
  },
  {
    date: '2025-04-06',
    heartRate: 69,
    steps: 6540,
    sleepHours: 8.2,
    caloriesBurned: 1900,
    bloodPressure: {
      systolic: 117,
      diastolic: 77,
    },
    bloodOxygen: 98,
  },
  {
    date: '2025-04-07',
    heartRate: 73,
    steps: 9650,
    sleepHours: 7.3,
    caloriesBurned: 2280,
    bloodPressure: {
      systolic: 121,
      diastolic: 81,
    },
    bloodOxygen: 97,
  },
];

export const doctors: Doctor[] = [
  {
    id: '1',
    name: 'Dr. Sarah Johnson',
    specialty: 'Cardiology',
    hospital: 'Memorial General Hospital',
    rating: 4.8,
    reviewCount: 156,
    availableDays: ['Monday', 'Wednesday', 'Friday'],
    image: 'https://i.pravatar.cc/300?img=28',
  },
  {
    id: '2',
    name: 'Dr. Michael Chen',
    specialty: 'Neurology',
    hospital: 'City Medical Center',
    rating: 4.9,
    reviewCount: 203,
    availableDays: ['Tuesday', 'Thursday', 'Saturday'],
    image: 'https://i.pravatar.cc/300?img=11',
  },
  {
    id: '3',
    name: 'Dr. Emily Williams',
    specialty: 'Dermatology',
    hospital: 'University Hospital',
    rating: 4.7,
    reviewCount: 124,
    availableDays: ['Monday', 'Tuesday', 'Friday'],
    image: 'https://i.pravatar.cc/300?img=5',
  },
  {
    id: '4',
    name: 'Dr. James Rodriguez',
    specialty: 'Orthopedics',
    hospital: 'Community Health Center',
    rating: 4.6,
    reviewCount: 178,
    availableDays: ['Wednesday', 'Thursday', 'Saturday'],
    image: 'https://i.pravatar.cc/300?img=12',
  },
  {
    id: '5',
    name: 'Dr. Lisa Thompson',
    specialty: 'Pediatrics',
    hospital: 'Children\'s Hospital',
    rating: 4.9,
    reviewCount: 215,
    availableDays: ['Monday', 'Wednesday', 'Friday'],
    image: 'https://i.pravatar.cc/300?img=24',
  },
  {
    id: '6',
    name: 'Dr. Robert Kim',
    specialty: 'Internal Medicine',
    hospital: 'Metropolitan Hospital',
    rating: 4.5,
    reviewCount: 132,
    availableDays: ['Tuesday', 'Thursday', 'Saturday'],
    image: 'https://i.pravatar.cc/300?img=15',
  },
];

export const medicines: MedicineItem[] = [
  {
    id: '1',
    name: 'Amoxicillin',
    dosage: '500mg',
    price: 12.99,
    description: 'Antibiotic used to treat bacterial infections',
    image: 'https://via.placeholder.com/100',
  },
  {
    id: '2',
    name: 'Lisinopril',
    dosage: '10mg',
    price: 15.99,
    description: 'Used to treat high blood pressure and heart failure',
    image: 'https://via.placeholder.com/100',
  },
  {
    id: '3',
    name: 'Metformin',
    dosage: '850mg',
    price: 8.99,
    description: 'Used to control blood sugar in type 2 diabetes',
    image: 'https://via.placeholder.com/100',
  },
  {
    id: '4',
    name: 'Atorvastatin',
    dosage: '20mg',
    price: 22.99,
    description: 'Used to lower cholesterol and triglycerides',
    image: 'https://via.placeholder.com/100',
  },
  {
    id: '5',
    name: 'Sertraline',
    dosage: '50mg',
    price: 18.99,
    description: 'Used to treat depression, anxiety, and PTSD',
    image: 'https://via.placeholder.com/100',
  },
  {
    id: '6',
    name: 'Albuterol',
    dosage: 'Inhaler',
    price: 35.99,
    description: 'Used for asthma and COPD to improve breathing',
    image: 'https://via.placeholder.com/100',
  },
];

export const bills: Bill[] = [
  {
    id: '1',
    date: '2025-03-15',
    hospital: 'Memorial General Hospital',
    amount: 450.75,
    status: 'paid',
    description: 'Annual physical examination',
  },
  {
    id: '2',
    date: '2025-03-27',
    hospital: 'City Medical Center',
    amount: 875.50,
    status: 'pending',
    description: 'MRI scan - left knee',
  },
  {
    id: '3',
    date: '2025-04-02',
    hospital: 'University Hospital',
    amount: 210.25,
    status: 'paid',
    description: 'Blood work and laboratory tests',
  },
  {
    id: '4',
    date: '2025-04-08',
    hospital: 'Community Health Center',
    amount: 1250.00,
    status: 'overdue',
    description: 'Emergency room visit - migraine',
  },
  {
    id: '5',
    date: '2025-03-20',
    hospital: 'Metropolitan Hospital',
    amount: 345.80,
    status: 'paid',
    description: 'Specialist consultation - Dr. Robert Kim',
  },
];
