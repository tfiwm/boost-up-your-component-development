import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Cat } from '../model/cat.model';

@Injectable({
  providedIn: 'root'
})
export class CatPageService {
  constructor() {}

  getCats(): Observable<Cat[]> {
    return of([
      {
        name: 'Daria',
        image: 'https://public-vapxwpcpxj.now.sh/daria.png',
        description: 'She loves to eat'
      },
      {
        name: 'Cappuccina',
        image: 'https://public-vapxwpcpxj.now.sh/cappuccina.png',
        description: 'Mommy with love!'
      }
    ]);
  }
}
