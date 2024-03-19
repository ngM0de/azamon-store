import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from '@models/product.model';
import { FilteredBy, FilterOptions } from '@models/utility.model';
import { selectFilterBy, selectFilterOptions, selectProducts } from '@state/global.selector';
import { setFilterOptions } from '@state/global.action';

@Injectable()
export class HomeStoreService {
  #store = inject(Store);

  get products$(): Observable<Product[]> {
    return this.#store.select(selectProducts);
  }

  get filteredBy$(): Observable<FilteredBy> {
    return this.#store.select(selectFilterBy);
  }

  get filterOptions$(): Observable<FilterOptions> {
    return this.#store.select(selectFilterOptions);
  }

  public setFilterOptions(filterOptions: Partial<FilterOptions>): void {
    this.#store.dispatch(setFilterOptions({ filterOptions }));
  }

}
