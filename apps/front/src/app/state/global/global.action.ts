import { createAction, props } from '@ngrx/store';
import { FilterSettings, FilterOptions } from '../../models/utility.model';

export const paginateUp = createAction('[Global Component] Paginate Up');
export const paginateDown = createAction('[Global Component] Paginate Down');

export const setFilterOptions = createAction('[Filter Component] Set FilterOptions', props<{
  filterOptions: Partial<FilterOptions>
}>());

export const filterProducts = createAction('[Filter Component] Filter Products', props<{
  filterSettings: Partial<FilterSettings>
}>());
