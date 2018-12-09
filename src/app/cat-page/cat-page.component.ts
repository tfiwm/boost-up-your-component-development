import { Component, OnInit } from '@angular/core';
import { CatPageService } from './cat-page.service';
import { Cat } from '../model/cat.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cat-page',
  templateUrl: './cat-page.component.html',
  styleUrls: ['./cat-page.component.scss']
})
export class CatPageComponent implements OnInit {
  cats$: Observable<Cat[]>;

  constructor(catPageService: CatPageService) {
    this.cats$ = catPageService.getCats();
  }

  ngOnInit() {}
}
