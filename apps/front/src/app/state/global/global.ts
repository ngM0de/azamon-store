import { createReducer, on } from '@ngrx/store';
import { GlobalState } from './global.model';
import { filterProducts, setFilterOptions, setProducts } from './global.action';
import { ProductType } from '@models/product.model';

const initialState: GlobalState = {
  products: [],
  filterSettings: { name: null, price: null, type: ProductType.All, rating: null },
  filterOptions: { prices: [], types: [], ratings: [] }
};
export const global = createReducer(initialState,
  on(setFilterOptions, (state, action): GlobalState => ({
    ...state,
    filterOptions: { ...state.filterOptions, ...action.filterOptions }
  })),
  on(filterProducts, (state, action): GlobalState => ({
    ...state,
    filterSettings: { ...state.filterSettings, ...action.filterSettings }
  })),
  on(setProducts, (state, action): GlobalState => ({
    ...state,
    products: action.products
  }))
);
