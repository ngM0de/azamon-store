import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavigationComponent } from '../../navigation/navigation.component';
import { MainComponent } from '../../main/main.component';
import { FooterComponent } from '../../footer/footer.component';

@Component({
  selector: 'azamon-store-home',
  standalone: true,
  imports: [
    NavigationComponent,
    MainComponent,
    FooterComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {

}
