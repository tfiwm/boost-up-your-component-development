import { Component, Input } from '@angular/core';
import { Cat } from '../model/cat.model';
import { Select, Store } from '@ngxs/store';
import { AppState } from '../state/app.state';
import { Observable } from 'rxjs';
import { DeleteCat } from '../state/app.actions';

@Component({
  selector: 'app-cat-card',
  templateUrl: './cat-card.component.html',
  styleUrls: ['./cat-card.component.scss']
})
export class CatCardComponent {
  @Input() cat: Cat;
  @Select(AppState.deleteMode) deleteMode$: Observable<boolean>;

  constructor(private store: Store) {}

  onDelete() {
    this.store.dispatch(new DeleteCat(this.cat));
  }
}
