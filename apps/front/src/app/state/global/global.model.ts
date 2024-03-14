import { FilterSettings, FilterOptions } from '../../models/utility.model';
import { ProductModel } from '../../models/product.model';

export interface GlobalState {
  filterSettings: FilterSettings;
  products: ProductModel[];
  filterOptions: FilterOptions
}
