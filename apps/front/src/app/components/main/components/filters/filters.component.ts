import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'azamon-store-filters',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FiltersComponent {}
