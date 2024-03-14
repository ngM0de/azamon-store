import { createAction, props } from '@ngrx/store';
import { FilterOptions, FilterSettings } from '@models/utility.model';
import { ProductModel } from '@models/product.model';

export const setProducts = createAction('[Home Component] Set Products', props<{
  products: ProductModel[]
}>());
export const setFilterOptions = createAction('[Filter Component] Set FilterOptions', props<{
  filterOptions: Partial<FilterOptions>
}>());

export const filterProducts = createAction('[Filter Component] Filter Products', props<{
  filterSettings: Partial<FilterSettings>
}>());
