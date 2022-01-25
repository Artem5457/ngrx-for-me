import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import {decrease, increase, clear, countSelector, updatedAtSelector} from "./reducers/counter";
import {map, Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  count$: Observable<number> = this.store.select(countSelector);
  cannotDecrease$: Observable<boolean> = this.count$.pipe(map(count => count <= 0));
  updatedAt$: Observable<number | undefined> = this.store.select(updatedAtSelector);

  constructor(
    private store: Store
  ) { }

  increase(): void {
    this.store.dispatch(increase());
  }

  decrease(): void {
    this.store.dispatch(decrease());
  }

  clear(): void {
    this.store.dispatch(clear())
  }
}
