export interface Product {
  id: string;
  code: string;
  name: string;
  category: 'saree' | 'dress_material' | 'lehenga' | 'designer_wear';
  fabric: 'Banarasi Silk' | 'Kanjeevaram Silk' | 'Organza' | 'Georgette' | 'Chiffon' | 'Cotton' | 'Silk Crepe';
  description: string;
  longDescription: string;
  price: number; // Retail / Base wholesale estimate for single piece
  wholesaleMinQty: number; // Minimum qty for wholesale pricing
  wholesalePrice: number; // Wholesale price per piece
  images: string[];
  colors: string[];
  isLatest: boolean;
  isBestSeller: boolean;
  specifications: {
    length: string;
    blouse: string;
    work: string;
    washCare: string;
    purity: string;
    [key: string]: string;
  };
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedColor: string;
  orderType: 'retail' | 'wholesale';
}

export type PageId = 'home' | 'shop' | 'heritage' | 'cart' | 'contact';

export interface InquiryFormState {
  name: string;
  businessName: string;
  phone: string;
  email: string;
  city: string;
  customMessage: string;
  includeCartItems: boolean;
}
