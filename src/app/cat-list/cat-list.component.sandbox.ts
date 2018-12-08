import { sandboxOf } from 'angular-playground';
import { CatListComponent } from './cat-list.component';
import { Cat } from '../model/cat.model';
import { CatCardComponent } from '../cat-card/cat-card.component';
import { MatCardModule, MatIconModule, MatButtonModule } from '@angular/material';

const cats: Cat[] = [
  {
    name: 'Daria',
    image: 'https://public-vapxwpcpxj.now.sh/daria.png',
    description: 'She loves to eat'
  },
  {
    name: 'Cappuccina',
    image: 'https://public-vapxwpcpxj.now.sh/cappuccina.png',
    description: 'Mommy with love!'
  },
  {
    name: 'Koala',
    image: 'https://public-vapxwpcpxj.now.sh/koala.png',
    description: 'Most beautiful princess'
  },
  {
    name: 'Coco',
    image: 'https://public-vapxwpcpxj.now.sh/coco.png',
    description: 'Nobody can jump higher'
  },
  {
    name: 'Pitbull',
    image: 'https://public-vapxwpcpxj.now.sh/pitbull.png',
    description: 'As loud as a Porsche :)'
  },
  {
    name: 'Pumpkin',
    image: 'https://public-vapxwpcpxj.now.sh/pumpkin.png',
    description: 'Loves his Mac'
  }
];

export default sandboxOf(CatListComponent, {
  declarations: [CatCardComponent],
  imports: [MatCardModule, MatIconModule, MatButtonModule]
}).add('default', {
  template: `<app-cat-list [cats]="cats"></app-cat-list>`,
  context: { cats }
});
