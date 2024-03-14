import { Route } from '@angular/router';
import { homeResolver } from './components/pages/home/home.resolver';

export const appRoutes: Route[] = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', resolve:{data: homeResolver}, loadComponent: () => import('./components/pages/home/home.component').then(c => c.HomeComponent) },
  { path: 'cart', loadComponent: () => import('./components/pages/cart/cart.component').then(c => c.CartComponent) },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];
