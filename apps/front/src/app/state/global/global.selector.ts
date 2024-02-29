import { createFeatureSelector, createSelector } from '@ngrx/store';
import { GlobalState } from './global.model';

const selectGlobalState = createFeatureSelector<GlobalState>('global');
export const selectPaginationLimit = createSelector(selectGlobalState, (state) => state.paginationLimit);
export const selectFilterSettings = createSelector(selectGlobalState, (state) => state.filterSettings);
export const selectFilterOptions = createSelector(selectGlobalState, (state) => state.filterOptions);
