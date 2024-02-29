import { ProductType } from './product.model';

export interface FilterSettings {
  name: string | null;
  price: number | null;
  type: ProductType | null;
  rating: number | null;
}

export interface FilterOptions {
  types: string[],
  prices: PriceRangeModel[];
  ratings: number[];
}

export interface PriceRangeModel {
  min: number,
  max: number,

}
