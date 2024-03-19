import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'azamon-store-price',
  standalone: true,
  imports: [],
  templateUrl: './price.component.html',
  styleUrl: './price.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PriceComponent {
  @Input({ required: true }) rawPrice: number;
  // public price: { currency: string, priceInteger: string, priceDecimal: string };

  // ngOnInit() {
  // const stringPrice = this.rawPrice.toString();
  // this.price = {
  //   currency: '$',
  //   priceInteger: stringPrice.slice(0, stringPrice.lastIndexOf('.')),
  //   priceDecimal: stringPrice.slice(stringPrice.lastIndexOf('.') + 1, stringPrice.length)
  // };
  // }
}
