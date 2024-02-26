import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private readonly base = 'http://localhost:4200';

  constructor(private readonly http: HttpClient) {
  }

  // public getProducts(_end: number): Observable {
  //   const params = new HttpParams();
  //   if (_end) {
  //     params.set('_end', _end);
  //   }
  //   return this.http.get(`${this.base}/products`, { params });
  // }

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
