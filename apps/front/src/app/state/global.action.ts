import { createAction, props } from '@ngrx/store';
import { FilterOptions, FilteredBy } from '@models/utility.model';
import { Product } from '@models/product.model';

export const setProducts = createAction('[Home Component] Set Products', props<{
  products: Product[]
}>());
export const setFilterOptions = createAction('[Filter Component] Set FilterOptions', props<{
  filterOptions: Partial<FilterOptions>
}>());

export const filterProducts = createAction('[Filter Component] Filter Products', props<{
  filteredBy: Partial<FilteredBy>
}>());

