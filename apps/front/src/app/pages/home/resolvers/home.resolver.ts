import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import { HttpService } from '@services/http/http.service';
import { Product } from '@models/product.model';
import { Observable, tap } from 'rxjs';

export const homeResolver: ResolveFn<Observable<Product[]>> = () => {
  const httpService = inject(HttpService);
  return httpService.getPaginatedProducts().pipe(tap(console.log));
};
