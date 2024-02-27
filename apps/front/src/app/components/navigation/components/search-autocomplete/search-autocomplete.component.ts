import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule, MatAutocompleteTrigger } from '@angular/material/autocomplete';
import { debounceTime, filter, Subject, take } from 'rxjs';
import { ProductModel } from '../../../../models/product.model';
import { MatInputModule } from '@angular/material/input';
import { AsyncPipe } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { MatSelect } from '@angular/material/select';
import { HttpService } from '../../../../services/http/http.service';

@Component({
  selector: 'azamon-store-search-autocomplete',
  standalone: true,
  imports: [
    MatFormFieldModule,
    ReactiveFormsModule,
    MatAutocompleteTrigger,
    MatAutocompleteModule,
    MatLabel,
    MatOptionModule,
    MatInputModule,
    AsyncPipe,
    MatIconModule,
    MatIconButton,
    MatSelect
  ],
  templateUrl: './search-autocomplete.component.html',
  styleUrl: './search-autocomplete.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchAutocompleteComponent implements OnInit {
  public options$: Subject<ProductModel[]>;
  public searchControl = new FormControl<string>('');

  constructor(private httpService: HttpService) {
  }

  ngOnInit() {
    this.options$ = new Subject<ProductModel[]>();
    this.fetchFilteredProducts('');
    this.subscribeToControlChanges();
  }


  private subscribeToControlChanges(): void {
    this.searchControl.valueChanges
      .pipe(filter(Boolean), debounceTime(500))
      .subscribe(this.fetchFilteredProducts.bind(this));
  }

  public fetchFilteredProducts(name: string): void {
    this.httpService.getFilteredProductsByName(name ?? '')
      .pipe(take(1))
      .subscribe(products => this.options$.next(products));
  }

}
