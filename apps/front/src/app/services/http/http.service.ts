import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductModel } from '../../models/product.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private readonly base = 'http://localhost:3000';

  constructor(private readonly http: HttpClient, private router: Router) {
  }

  public getProducts(_start = 0, _limit = 10): Observable<ProductModel[]> {
    const params = new HttpParams({ fromObject: { _start, _limit } });
    return this.http.get<ProductModel[]>(`${this.base}/products`, { params });
  }

  // public addToCart(): void {
  //
  // };
  //
  // public removeFromCart(): void {
  //
  // };
  //
  // public editCart(): void {
  //
  // };

}
