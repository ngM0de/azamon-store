import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatLabel } from '@angular/material/form-field';
import { MatListOption, MatSelectionList } from '@angular/material/list';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'azamon-store-type-filter',
  standalone: true,
  imports: [CommonModule, MatLabel, MatListOption, MatSelectionList],
  templateUrl: './type-filter.component.html',
  styleUrl: './type-filter.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TypeFilterComponent {
  @Input() types: string[];
  @Input() control: FormControl<string | null>;
}
