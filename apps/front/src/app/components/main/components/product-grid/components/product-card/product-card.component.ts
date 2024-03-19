import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Product } from '@models/product.model';
import { RatingRowComponent } from '@shared/components/rating-row/rating-row.component';
import { NgStyle } from '@angular/common';
import { PriceComponent } from '@shared/components/price/price.component';

@Component({
  selector: 'azamon-store-product-card',
  standalone: true,
  imports: [
    RatingRowComponent,
    NgStyle,
    PriceComponent
  ],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductCardComponent {
  @Input() product: Product;
}
