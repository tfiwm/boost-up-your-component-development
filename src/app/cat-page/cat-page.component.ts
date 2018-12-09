import { Component } from '@angular/core';
import { Cat } from '../model/cat.model';
import { Observable } from 'rxjs';
import { AppState } from '../state/app.state';
import { Select, Store } from '@ngxs/store';
import { LoadCats } from '../state/app.actions';

@Component({
  selector: 'app-cat-page',
  templateUrl: './cat-page.component.html',
  styleUrls: ['./cat-page.component.scss']
})
export class CatPageComponent {
  @Select(AppState.catList) cats$: Observable<Cat[]>;

  @Select(AppState.errorCatList) errorLoadingCats$: Observable<boolean>;

  constructor(private store: Store) {
    this.store.dispatch(new LoadCats());
  }
}
