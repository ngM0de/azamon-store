import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NavigationComponent } from '@components/navigation/navigation.component';
import { MainComponent } from '@components/main/main.component';
import { FooterComponent } from '@components/footer/footer.component';
import { CategoriesComponent } from '@components/navigation/components/categories/categories.component';
import { HomeStoreService } from '@pages/home/services/homeStore/home-store-facade.service';
import { FiltersService } from '@components/main/components/filters/services/filters/filters.service';
import { HttpService } from '@services/http/http.service';
import { switchMap } from 'rxjs';


@Component({
  selector: 'azamon-store-home',
  standalone: true,
  imports: [
    NavigationComponent,
    MainComponent,
    FooterComponent,
    CategoriesComponent
  ],
  providers: [HomeStoreService, FiltersService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  constructor(
    private filtersService: FiltersService,
    private store: HomeStoreService,
    private http: HttpService) {
  }

  ngOnInit() {
    this.filtersService.setupInitialState();
    this.http.getAllProducts()
      .subscribe(products => {
        this.store.setProducts(products);
      });
  }

}
