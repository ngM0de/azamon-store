import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './services/http/http.service';
import { selectPaginationLimit } from './state/global/global.selector';

@Component({
  standalone: true,
  imports: [RouterModule, HttpClientModule],
  selector: 'azamon-store-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  public paginationLimit$: Observable<number> = this.store.select(selectPaginationLimit);


  constructor(private store: Store, private httpService: HttpService) {
  }

  ngOnInit() {
    this.paginationLimit$.subscribe(console.log);
  }

}
