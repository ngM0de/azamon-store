import { Route } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';

export const appRoutes: Route[] = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'cart', loadComponent: () => import('./components/pages/cart/cart.component').then(c => c.CartComponent) },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];
