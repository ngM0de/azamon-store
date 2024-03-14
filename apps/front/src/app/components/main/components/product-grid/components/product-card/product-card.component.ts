import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'azamon-store-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductCardComponent {

}
