export interface ProductModel {
  id?: number;
  name: string;
  image: string;
  price: number;
  description: string;
  rating: number;
  type: ProductType
}

export enum ProductType {
  'TVs',
  'Appliances',
  'Phones',
  'Video Games',
  'All'
}
