
export type Product = {
  id: number;
  name: string;
  description: string;
  shortDescription: string;
  price: number;
  image: string;
  category: string;
  featured?: boolean;
  bestseller?: boolean;
  benefits: string[];
  ingredients?: string[];
  reviews?: Review[];
};

export type Review = {
  id: number;
  name: string;
  rating: number;
  comment: string;
  date: string;
};

export type CartItem = {
  product: Product;
  quantity: number;
};
