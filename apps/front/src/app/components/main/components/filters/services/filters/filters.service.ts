import { Injectable } from '@angular/core';
import { PriceRangeModel } from '@models/utility.model';
import { ProductType } from '@models/product.model';
import { HomeStoreFacade } from '@pages/home/services/homeStore/home-store-facade.service';

@Injectable()
export class FiltersService {

  constructor(private homeStoreFacade: HomeStoreFacade) {
  }

  public setupInitialState(): void {
    const types = this.getTypesFilterData();
    const prices: PriceRangeModel[] = this.getPricesFilterData();
    const ratings = this.getRatingsFilterData();
    this.homeStoreFacade.setFilterOptions({ types, prices, ratings });
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
        acc = [
          ...acc, {
            min: arr[index - 2],
            max: next
          }
        ];
      }
      return acc;
    }, [] as PriceRangeModel[]);
  }
}
