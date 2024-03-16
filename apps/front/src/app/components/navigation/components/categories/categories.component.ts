import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProductType } from '@models/product.model';

@Component({
  selector: 'azamon-store-categories',
  standalone: true,
  imports: [],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoriesComponent {
  public categories = Object.keys(ProductType).filter(key => /[a-z]/i.test(key))
}
