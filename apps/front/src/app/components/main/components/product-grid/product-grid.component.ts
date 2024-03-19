import { Component, OnInit } from '@angular/core';
import {
  ProductCardComponent
} from '@components/main/components/product-grid/components/product-card/product-card.component';
import { AsyncPipe } from '@angular/common';
import { HomeStoreService } from '@pages/home/services/homeStore/home-store-facade.service';

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
  public products$ = this.homeStore.products$;

  constructor(private homeStore: HomeStoreService) {

  }

  ngOnInit() {
    this.products$.subscribe(console.log)
    console.log(`to prevent errors`);
  }
}
