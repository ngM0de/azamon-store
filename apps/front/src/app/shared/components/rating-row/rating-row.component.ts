import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'azamon-store-rating-row',
  standalone: true,
  imports: [
    MatIcon
  ],
  templateUrl: './rating-row.component.html',
  styleUrl: './rating-row.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RatingRowComponent implements OnInit {
  @Input({required: true}) rating: number;
  public starsRow: number[];

  ngOnInit() {
    this.starsRow = new Array(5)
      .fill(0)
      .map((v, i) => i <= this.rating ? 1 : 0);
  }
}
