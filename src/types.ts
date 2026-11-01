export interface Product {
  id: string;
  name: string;
  latinName: string;
  tag: string;
  badge: string;
  price: number;
  oldPrice?: number;
  age: string;
  rating: number;
  reviewsCount: number;
  description: string;
  features: string[];
  specs: { label: string; value: string }[];
  inStock: boolean;
  colorHex: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}
