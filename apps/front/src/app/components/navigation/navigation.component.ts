import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SearchAutocompleteComponent } from './components/search-autocomplete/search-autocomplete.component';
import { LogoComponent } from './components/logo/logo.component';
import { IconButtonComponent } from '../shared/icon-button/icon-button.component';

@Component({
  selector: 'azamon-store-navigation',
  standalone: true,
  imports: [
    SearchAutocompleteComponent,
    LogoComponent,
    IconButtonComponent
  ],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationComponent {

}
