import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { testPropertySelector } from './state/global/global.selector';
import { testAction } from './state/global/global.action';

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'azamon-store-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  public testProperty$: Observable<string>;

  constructor(private store: Store) {
  }

  ngOnInit() {
    // remove
    this.testProperty$ = this.store.select(testPropertySelector);
    this.testProperty$.subscribe(console.log);
    this.store.dispatch(testAction());
    // remove
  }
}
