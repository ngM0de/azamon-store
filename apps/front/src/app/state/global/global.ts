import { createReducer, on } from '@ngrx/store';
import { GlobalState } from './global.model';
import { filterProducts, paginateDown, paginateUp, setFilterOptions } from './global.action';
import { ProductType } from '../../models/product.model';

const initialState: GlobalState = {
  paginationLimit: 10,
  filterSettings: { name: null, price: null, type: ProductType.All, rating: null },
  filterOptions: { prices: [], types: [], ratings: [] }
};
export const global = createReducer(initialState,
  on(setFilterOptions, (state, action): GlobalState => ({
    ...state,
    filterOptions: { ...state.filterOptions, ...action.filterOptions }
  })),
  on(paginateUp, (state): GlobalState => ({ ...state, paginationLimit: state.paginationLimit + 10 })),
  on(paginateDown, (state): GlobalState => ({ ...state, paginationLimit: state.paginationLimit -= 10 })),
  on(filterProducts, (state, action): GlobalState => ({
    ...state,
    filterSettings: { ...state.filterSettings, ...action.filterSettings }
  }))
);
