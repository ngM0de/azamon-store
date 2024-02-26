import { createFeatureSelector, createSelector } from '@ngrx/store';
import { GlobalState } from './global.model';

const selectGlobalState = createFeatureSelector<GlobalState>('global');
const selectTestProperty = (state: GlobalState) => state.testProperty;
const selectPaginationLimit = (state: GlobalState) => state.paginationLimit;

export const testPropertySelector = createSelector(selectGlobalState, selectTestProperty);
export const paginationLimitSelector = createSelector(selectGlobalState, selectPaginationLimit);
