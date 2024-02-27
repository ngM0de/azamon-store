import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavigationComponent } from '../../navigation/navigation.component';
import { MainComponent } from '../../main/main.component';
import { FooterComponent } from '../../footer/footer.component';
import { CategoriesComponent } from '../../navigation/components/categories/categories.component';

@Component({
  selector: 'azamon-store-home',
  standalone: true,
  imports: [
    NavigationComponent,
    MainComponent,
    FooterComponent,
    CategoriesComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {

}
