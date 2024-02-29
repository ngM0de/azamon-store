import { FormControl, FormGroup } from '@angular/forms';

export interface FiltersFormGroupModel {
  type: FormControl<string | null>;
  price: FormGroup<PriceGroup>;
  rating: FormControl<number | null>;
}

export interface PriceGroup {
  min: FormControl<number | null>,
  max: FormControl<number | null>
}

export interface PriceGroupValue {
  min: number | null,
  max: number | null
}
