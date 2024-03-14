import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatMiniFabButton } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'azamon-store-icon-button',
  standalone: true,
  imports: [
    MatMiniFabButton,
    MatIconModule
  ],
  templateUrl: './icon-button.component.html',
  styleUrl: './icon-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconButtonComponent {
  @Input({ required: true }) iconName: string;

}
