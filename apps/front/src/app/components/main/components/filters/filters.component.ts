import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
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
import { HomeStoreService } from '@pages/home/services/homeStore/home-store-facade.service';

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
  public filtersOptions$: Observable<FilterOptions> = this.homeStoreFacade.filterOptions$;
  public filtersFormGroup: FormGroup<FiltersFormGroupModel>;

  constructor(private homeStoreFacade: HomeStoreService, private fb: FormBuilder) {
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
    this.homeStoreFacade.setFilterOptions({ [filter]: value })
  }
}
