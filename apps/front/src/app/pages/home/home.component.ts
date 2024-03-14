import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NavigationComponent } from '@components/navigation/navigation.component';
import { MainComponent } from '@components/main/main.component';
import { FooterComponent } from '@components/footer/footer.component';
import { CategoriesComponent } from '@components/navigation/components/categories/categories.component';
import { Store } from '@ngrx/store';
import { PriceRangeModel } from '@models/utility.model';
import { setFilterOptions } from '@state/global/global.action';
import { ProductType } from '@models/product.model';


@Component({
  selector: 'azamon-store-home',
  standalone: true,
  imports: [
    NavigationComponent,
    MainComponent,
    FooterComponent,
    CategoriesComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  constructor(private store: Store) {
  }

  ngOnInit() {
    this.setupInitialState();
  }

  private setupInitialState(): void {
    const types = this.getTypesFilterData();
    const prices: PriceRangeModel[] = this.getPricesFilterData();
    const ratings = this.getRatingsFilterData();
    this.store.dispatch(setFilterOptions({ filterOptions: { types, prices, ratings } }));
  }


  private getTypesFilterData(): string[] {
    return Object.keys(ProductType).filter(key => /[a-z]/i.test(key)).reverse();
  }


  private getRatingsFilterData(): number[] {
    return new Array(5).fill(0).map((_, index) => index).reverse();
  }

  private getPricesFilterData(): PriceRangeModel[] {
    const prices: number[] = new Array(10).fill(0)
      .map((_, index) => (index + 1) * 100);

    return prices.reduce((acc, next, index, arr) => {
      if ((index !== 0 && index % 2) === 0) {
        acc = [...acc, {
          min: arr[index - 2],
          max: next
        }];
      }
      return acc;
    }, [] as PriceRangeModel[]);
  }
}
