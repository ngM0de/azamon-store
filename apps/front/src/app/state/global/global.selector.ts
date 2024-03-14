import { createFeatureSelector, createSelector } from '@ngrx/store';
import { GlobalState } from './global.model';

const selectGlobalState = createFeatureSelector<GlobalState>('global');
export const selectProducts = createSelector(selectGlobalState, (state) => state.products);
export const selectFilterSettings = createSelector(selectGlobalState, (state) => state.filterSettings);
export const selectFilterOptions = createSelector(selectGlobalState, (state) => state.filterOptions);
