import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import { HttpService } from '@services/http/http.service';
import { ProductModel } from '@models/product.model';
import { Observable, tap } from 'rxjs';

export const homeResolver: ResolveFn<Observable<ProductModel[]>> = (route, state) => {
  const httpService = inject(HttpService);
  // const store = inject(Store);

  return httpService.getPaginatedProducts().pipe(tap(console.log));
};
