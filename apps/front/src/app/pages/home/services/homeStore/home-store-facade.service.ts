import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from '@models/product.model';
import { FilteredBy, FilterOptions } from '@models/utility.model';
import { selectFilterBy, selectFilterOptions, selectProducts } from '@state/global.selector';
import { setFilterOptions, setProducts } from '@state/global.action';
import { HttpService } from '@services/http/http.service';

@Injectable()
export class HomeStoreService {
  constructor(private http: HttpService) {
  }

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

  public setProducts(products: Product[]): void {
    this.#store.dispatch(setProducts({ products }));
  }

}
