import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { ToggleDeleteMode } from '../state/app.actions';

@Component({
  selector: 'app-cat-toolbar',
  templateUrl: './cat-toolbar.component.html',
  styleUrls: ['./cat-toolbar.component.scss']
})
export class CatToolbarComponent {
  constructor(private store: Store) {}

  toogleDeleteMode() {
    this.store.dispatch(new ToggleDeleteMode());
  }
}
