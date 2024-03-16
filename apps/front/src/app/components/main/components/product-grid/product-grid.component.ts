import { Component, OnInit } from '@angular/core';
import {
  ProductCardComponent
} from '@components/main/components/product-grid/components/product-card/product-card.component';
import { AsyncPipe } from '@angular/common';
import { HomeStoreFacade } from '@pages/home/services/homeStore/home-store-facade.service';

@Component({
  selector: 'azamon-store-product-grid',
  standalone: true,
  imports: [
    ProductCardComponent,
    AsyncPipe
  ],
  templateUrl: './product-grid.component.html',
  styleUrl: './product-grid.component.scss'
})
export class ProductGridComponent implements OnInit {
  public products$ = this.homeStoreFacade.products$;

  constructor(private homeStoreFacade: HomeStoreFacade) {

  }

  ngOnInit() {
    console.log(`to prevent errors`);
  }
}
