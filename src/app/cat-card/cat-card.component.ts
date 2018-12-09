import { Component, OnInit, Input } from '@angular/core';
import { Cat } from '../model/cat.model';
import { trigger, transition, animate, style, keyframes, state } from '@angular/animations';

@Component({
  selector: 'app-cat-card',
  templateUrl: './cat-card.component.html',
  styleUrls: ['./cat-card.component.scss']
})
export class CatCardComponent implements OnInit {
  @Input() cat: Cat;
  @Input() deleteMode = false;

  constructor() {}

  ngOnInit() {}
}
