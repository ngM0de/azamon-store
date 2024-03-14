import { Route } from '@angular/router';
import { homeResolver } from '@pages/home/resolvers/home.resolver';
export const appRoutes: Route[] = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', resolve:{data: homeResolver}, loadComponent: () => import('@pages/home/home.component').then(c => c.HomeComponent) },
  { path: 'cart', loadComponent: () => import('@pages/cart/cart.component').then(c => c.CartComponent) },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];
