import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { paginationLimitSelector } from './state/global/global.selector';
import { paginateUp } from './state/global/global.action';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './services/http/http.service';

@Component({
  standalone: true,
  imports: [RouterModule, HttpClientModule],
  selector: 'azamon-store-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  public paginationLimit$: Observable<number> = this.store.select(paginationLimitSelector);


  constructor(private store: Store, private httpService: HttpService) {
  }

  ngOnInit() {
    this.paginationLimit$.subscribe(console.log);
  }

  getMore() {
    this.store.dispatch(paginateUp());
  }
}
