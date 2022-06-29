export interface ProductsApi {
  id: number;
  name: string;
  layout: number;
  published: boolean;
  categories?: Category[];
  is_extended: boolean;
}

export interface Category {
  id: number;
  name: string;
  layout: number;
  products: Product[];
  is_extended: boolean;
}

export interface Product {
  id: number;
  name: string;
  thumbnail: string;
  display_name: string;
  price_intructions: PriceInstructions;
}

export interface PriceInstructions {
  unit_price: number;
}
