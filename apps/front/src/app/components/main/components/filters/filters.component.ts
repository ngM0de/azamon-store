import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { selectFilterOptions } from '@state/global/global.selector';
import { setFilterOptions } from '@state/global/global.action';
import { Store } from '@ngrx/store';
import { FilterOptions } from '@models/utility.model';
import { MatListOption, MatSelectionList } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { PriceFilterComponent } from './components/price-filter/price-filter.component';
import { TypeFilterComponent } from './components/type-filter/type-filter.component';
import { RatingFilterComponent } from './components/rating-filter/rating-filter.component';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FiltersFormGroupModel } from './filters.model';
import { ProductType } from '@models/product.model';
import { RatingRowComponent } from '@shared/components/rating-row/rating-row.component';
import { AppCurrencyPipe } from '@shared/pipes/currency/appCurrency.pipe';

@Component({
  selector: 'azamon-store-filters',
  standalone: true,
  imports: [
    CommonModule,
    MatSelectionList,
    MatListOption,
    RatingRowComponent,
    MatFormFieldModule,
    AppCurrencyPipe,
    PriceFilterComponent,
    TypeFilterComponent,
    RatingFilterComponent
  ],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FiltersComponent implements OnInit {
  public filtersOptions$: Observable<FilterOptions> = this.store.select(selectFilterOptions);
  public filtersFormGroup: FormGroup<FiltersFormGroupModel>;

  constructor(private store: Store, private fb: FormBuilder) {
  }

  ngOnInit() {
    this.initializeFormGroup();
  }

  private initializeFormGroup(): void {
    this.filtersFormGroup = this.fb.group<FiltersFormGroupModel>({
      type: this.fb.control(ProductType[ProductType.All]),
      price: this.fb.group({ min: this.fb.control(0), max: this.fb.control(0) }),
      rating: this.fb.control(null)

    });
  }

  public filterBy(filter: keyof FilterOptions, value: unknown): void {
    this.store.dispatch(setFilterOptions({ filterOptions: { [filter]: value } }));
  }
}
