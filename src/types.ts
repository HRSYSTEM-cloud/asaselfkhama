export type RugCategory = 'all' | 'hereke' | 'konya' | 'kayseri' | 'ushak' | 'moquette';

export interface RugItem {
  id: string;
  name: string;
  arabicName: string;
  category: RugCategory;
  origin: string;
  originArabic: string;
  material: string;
  materialArabic: string;
  knotDensity: string;
  dimensions: string[];
  thickness: string;
  featured: boolean;
  image: string;
  description: string;
  historySnippet: string;
  colors: string[];
  idealFor: string;
  features: string[];
  inStock: boolean;
  warranty: string;
}

export type RoomScene = 'majlis' | 'salon' | 'dining' | 'bedroom';

export interface RoomPreset {
  id: RoomScene;
  title: string;
  arabicTitle: string;
  description: string;
  bgGradient: string;
  accentColor: string;
  furnitureType: string;
}

export interface BookingForm {
  fullName: string;
  phone: string;
  branch: 'riyadh' | 'jeddah';
  date: string;
  timeSlot: string;
  interestedCategories: string[];
  roomType: string;
  specialRequests: string;
  serviceType: 'showroom_visit' | 'home_preview';
}

export interface BranchInfo {
  id: 'riyadh' | 'jeddah';
  name: string;
  city: string;
  district: string;
  address: string;
  plusCode: string;
  googleMapsUrl: string;
  wazeUrl: string;
  coordinates: { lat: number; lng: number };
  phone: string;
  whatsapp: string;
  openHours: string;
  notes: string;
}
