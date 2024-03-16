import { inject, Injectable } from '@angular/core';
import { Action, MemoizedSelector, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from '@models/product.model';

@Injectable({
  providedIn: 'root'
})
export class AppStoreService {
  #store = inject(Store)
  protected products$: Observable<Product[]> | undefined
  private select(selector: MemoizedSelector<unknown, unknown>): Observable<unknown> {
    return this.#store.select(selector)
  }

  public dispatch(action: Action): void {
    this.#store.dispatch(action)
  }


}
