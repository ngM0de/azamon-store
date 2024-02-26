import { createReducer, on } from '@ngrx/store';
import { GlobalState } from './global.model';
import { paginateDown, paginateUp, testAction } from './global.action';

const initialState: GlobalState = { testProperty: '', paginationLimit: 10 };

export const global = createReducer(initialState,
  on(testAction, (state): GlobalState => ({ ...state, testProperty: 'testSuccess' })),
  on(paginateUp, (state): GlobalState => ({ ...state, paginationLimit: state.paginationLimit + 10 })),
  on(paginateDown, (state): GlobalState => ({ ...state, paginationLimit: state.paginationLimit -= 10 }))
);
