import { Pipe, PipeTransform } from '@angular/core';
import { PriceRangeModel } from '../../../models/utility.model';

@Pipe({
  name: 'appCurrency',
  standalone: true
})
export class AppCurrencyPipe implements PipeTransform {

  transform(value: PriceRangeModel): string {
    return (value.min + ' - ' + value.max + ' $')
  }

}
