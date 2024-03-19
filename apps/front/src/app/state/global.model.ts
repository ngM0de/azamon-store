import { FilteredBy, FilterOptions } from '@models/utility.model';
import { Product } from '@models/product.model';

export interface AppStateModel {
  global: GlobalState
}

export interface GlobalState {
  filteredBy: FilteredBy;
  products: Product[];
  filterOptions: FilterOptions
}


export enum SelectorMap {

}
