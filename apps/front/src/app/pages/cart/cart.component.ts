import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'azamon-store-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartComponent {

}
