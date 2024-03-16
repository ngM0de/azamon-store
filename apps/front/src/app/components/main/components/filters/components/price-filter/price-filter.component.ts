import { ChangeDetectionStrategy, Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { filter, Observable, Subject, take, takeUntil } from 'rxjs';
import { FilterOptions, PriceRangeModel } from '@models/utility.model';
import { selectFilterOptions } from '@state/global.selector';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatListOption, MatSelectionList } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { PriceGroup, PriceGroupValue } from '../../filters.model';
import { AsyncPipe } from '@angular/common';
import { MatCheckbox } from '@angular/material/checkbox';
import { AppCurrencyPipe } from '@shared/pipes/currency/appCurrency.pipe';

@Component({
  selector: 'azamon-store-price-filter',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatSelectionList,
    MatFormFieldModule,
    MatListOption,
    AppCurrencyPipe,
    MatInput,
    AsyncPipe,
    MatCheckbox,
    FormsModule
  ],
  templateUrl: './price-filter.component.html',
  styleUrl: './price-filter.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class PriceFilterComponent implements OnInit {
  @Input() prices: PriceRangeModel[];
  @Input({ required: true }) priceGroup: FormGroup<PriceGroup>;
  public selectedOptions: PriceGroupValue[];
  private filterOptions$: Observable<FilterOptions> = this.store.select(selectFilterOptions);
  private unsubscribeAll$ = new Subject<void>();

  constructor(private store: Store) {
  }

  ngOnInit() {
    this.priceGroup.valueChanges.pipe(filter(Boolean), takeUntil(this.unsubscribeAll$)).subscribe();
    this.filterOptions$.pipe(take(1)).subscribe(({ prices }) => {
      this.priceGroup.get('min')?.setValue(0);
      this.priceGroup.get('max')?.setValue(prices[prices.length - 1].max / 2);
    });

  }

  public syncSliderWithRadioButtons(event: any) {
    console.log(event);
    const source = event.source._value;
    if (source?.length) {
      this.priceGroup.get('min')?.setValue(+source[0].min);
      this.priceGroup.get('max')?.setValue(source[source.length - 1].max);
    }
  }

}
