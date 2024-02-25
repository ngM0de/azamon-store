import { createReducer, on } from '@ngrx/store';
import { GlobalState } from './global.model';
import { testAction } from './global.action';

const initialState: GlobalState = { testProperty: '' };

export const global = createReducer(initialState,
  on(testAction, (state): GlobalState => ({ ...state, testProperty: 'testSuccess' })));
