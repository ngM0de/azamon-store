import { createFeatureSelector, createSelector } from '@ngrx/store';
import { GlobalState } from './global.model';

const selectGlobalState = createFeatureSelector<GlobalState>('global');
export const selectProducts = createSelector(selectGlobalState, (state) => state.products);
export const selectFilterBy = createSelector(selectGlobalState, (state) => state.filteredBy);
export const selectFilterOptions = createSelector(selectGlobalState, (state) => state.filterOptions);


export enum selectorMapEnum  {
  Products = 1,
  FilterSettings,
  FilteredProducts
}
export const selectorMap = {

}


