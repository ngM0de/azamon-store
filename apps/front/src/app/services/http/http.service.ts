import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of, switchMap } from 'rxjs';
import { Product } from '@models/product.model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private readonly base = 'http://localhost:3000';

  constructor(private readonly http: HttpClient) {
  }

  public getPaginatedProducts(_start = 0, _limit = 10): Observable<Product[]> {
    const params = new HttpParams({ fromObject: { _start, _limit } });
    return this.http.get<Product[]>(`${this.base}/products`, { params });
  }

  public getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.base}/products`);
  }

  public getFilteredProductsByName(searchString: string): Observable<Product[]> {
    return this.getAllProducts()
      .pipe(switchMap(products => {
        return of(products.filter(product => new RegExp(searchString, 'i').test(product.name)
        ));
      }));
  }
}
