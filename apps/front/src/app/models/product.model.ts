export interface ProductModel {
  id?: number;
  name: string;
  image: string;
  price: number;
  description: string;
  type: ProductType
}

export enum ProductType {
  'Electronics',
  'Food',
  'Apparels',
  'Clothes'
}
