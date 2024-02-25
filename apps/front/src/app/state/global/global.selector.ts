import { createFeatureSelector, createSelector } from '@ngrx/store';
import { GlobalState } from './global.model';

const selectGlobalState = createFeatureSelector<GlobalState>('global');
const selectTestProperty = (state: GlobalState) => state.testProperty;

export const testPropertySelector = createSelector(selectGlobalState, selectTestProperty);
