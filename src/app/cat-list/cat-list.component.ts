import { Component, OnInit, Input } from '@angular/core';
import { Cat } from '../model/cat.model';

@Component({
  selector: 'app-cat-list',
  templateUrl: './cat-list.component.html',
  styleUrls: ['./cat-list.component.scss']
})
export class CatListComponent implements OnInit {
  @Input() cats: Cat[];

  constructor() {}

  ngOnInit() {}
}
