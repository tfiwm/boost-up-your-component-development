import { Component, OnInit } from '@angular/core';
import { CatPageService } from './cat-page.service';
import { Cat } from '../model/cat.model';
import { Observable, Subject, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-cat-page',
  templateUrl: './cat-page.component.html',
  styleUrls: ['./cat-page.component.scss']
})
export class CatPageComponent implements OnInit {
  cats$: Observable<Cat[]>;

  errorLoadingCats$: Subject<boolean> = new Subject();

  constructor(catPageService: CatPageService) {
    this.cats$ = catPageService.getCats().pipe(
      catchError(() => {
        this.errorLoadingCats$.next(true);
        return of([]);
      })
    );
  }

  ngOnInit() {}
}
