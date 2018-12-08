import { sandboxOf } from 'angular-playground';
import { CatCardComponent } from './cat-card.component';
import { Cat } from '../model/cat.model';
import { MatCardModule, MatMenuModule, MatIconModule, MatButtonModule } from '@angular/material';

const cat: Cat = {
  name: 'Daria',
  image: 'https://public-vapxwpcpxj.now.sh/daria.png',
  description: 'She loves to eat'
};

export default sandboxOf(CatCardComponent, {
  imports: [MatCardModule, MatMenuModule, MatIconModule, MatButtonModule]
}).add('default', {
  template: `
    <div style="width: 300px; padding: 50px;">
      <app-cat-card [cat]="cat"></app-cat-card>
    </div>
  `,
  context: {
    cat
  }
});
