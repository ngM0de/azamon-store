import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectProducts } from '../../../../state/global/global.selector';

@Component({
  selector: 'azamon-store-product-grid',
  standalone: true,
  imports: [],
  templateUrl: './product-grid.component.html',
  styleUrl: './product-grid.component.scss'
})
export class ProductGridComponent implements OnInit{
  public products$ = this.store.select(selectProducts)
  constructor(private store: Store) {

  }

  ngOnInit() {
    this.products$.subscribe(console.log)
  }
}
