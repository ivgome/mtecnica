export interface ProductosAPI {
  id: number;
  name: string;
  order: number;
  layout: number;
  published: boolean;
  categories?: ProductosAPI[];
  is_extended: boolean;
  products?: Product[];
}

export interface Product {
  id: string;
  slug: string;
  limit: number;
  badges: Badges;
  packaging: Packaging | null;
  published: boolean;
  share_url: string;
  thumbnail: string;
  categories: Category[];
  display_name: string;
  price_instructions: PriceInstructions;
}

export interface Badges {
  is_water: boolean;
  requires_age_check: boolean;
}

export interface Category {
  id: number;
  name: Name;
  level: number;
  order: number;
}

export enum Name {
  AzúcarCaramelosYChocolate = 'Azúcar, caramelos y chocolate',
}

export enum Packaging {
  Bote = 'Bote',
  Caja = 'Caja',
  Malla = 'Malla',
  Pack2 = 'Pack-2',
  Pack3 = 'Pack-3',
  Paquete = 'Paquete',
  Tableta = 'Tableta',
  Tarro = 'Tarro',
}

export interface PriceInstructions {
  iva: number;
  is_new: boolean;
  is_pack: boolean;
  pack_size: number | null;
  unit_name: UnitName | null;
  unit_size: number;
  bulk_price: string;
  unit_price: string;
  approx_size: boolean;
  size_format: EFormat;
  total_units: number | null;
  unit_selector: boolean;
  bunch_selector: boolean;
  drained_weight: null;
  selling_method: number;
  price_decreased: boolean;
  reference_price: string;
  min_bunch_amount: number;
  reference_format: EFormat;
  increment_bunch_amount: number;
}

export enum EFormat {
  Kg = 'kg',
  The100G = '100 g',
}

export enum UnitName {
  Paquetes = 'paquetes',
  Porciones = 'porciones',
  Ud = 'ud.',
  Vasitos = 'vasitos',
}
