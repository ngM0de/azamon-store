import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FiltersComponent } from './components/filters/filters.component';
import { ProductGridComponent } from './components/product-grid/product-grid.component';

@Component({
  selector: 'azamon-store-main',
  standalone: true,
  imports: [
    FiltersComponent,
    ProductGridComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent {

}
