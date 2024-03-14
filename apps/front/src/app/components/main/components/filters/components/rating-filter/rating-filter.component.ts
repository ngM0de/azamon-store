import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatLabel } from '@angular/material/form-field';
import { MatListOption, MatSelectionList } from '@angular/material/list';
import { NgTemplateOutlet } from '@angular/common';
import { RatingRowComponent } from '@shared/components/rating-row/rating-row.component';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'azamon-store-rating-filter',
  standalone: true,
  imports: [
    MatLabel,
    MatListOption,
    MatSelectionList,
    NgTemplateOutlet,
    RatingRowComponent
  ],
  templateUrl: './rating-filter.component.html',
  styleUrl: './rating-filter.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RatingFilterComponent {
  @Input() ratings: number[];
  @Input() control: FormControl<number | null>;

}
