import { sandboxOf } from 'angular-playground';
import { CatCardComponent } from './cat-card.component';
import { Cat } from '../model/cat.model';
import { MatCardModule, MatIconModule, MatButtonModule } from '@angular/material';
import { Store, NgxsModule } from '@ngxs/store';
import { AppState } from '../state/app.state';
import { PlaygroundSetupService } from 'src/playground-helper';

const cat: Cat = {
  name: 'Daria',
  image: 'https://public-vapxwpcpxj.now.sh/daria.png',
  description: 'She loves to eat'
};

export default sandboxOf(CatCardComponent, {
  imports: [MatCardModule, MatIconModule, MatButtonModule, NgxsModule.forFeature([AppState])]
})
  .add('default', {
    template: `
    <div style="width: 300px; padding: 50px;">
      <app-cat-card [cat]="cat"></app-cat-card>
    </div>
  `,
    context: {
      cat
    }
  })
  .add('with gender - male', {
    template: `
    <div style="width: 300px; padding: 50px;">
      <app-cat-card [cat]="cat"></app-cat-card>
    </div>
  `,
    context: {
      cat: {
        name: 'Pitbull',
        image: 'https://public-vapxwpcpxj.now.sh/pitbull.png',
        description: 'As loud as a Porsche :)',
        gender: 'male'
      } as Cat
    }
  })
  .add('with gender - female', {
    template: `
    <div style="width: 300px; padding: 50px;">
      <app-cat-card [cat]="cat"></app-cat-card>
    </div>
  `,
    context: {
      cat: { ...cat, gender: 'female' } as Cat
    }
  })
  .add('no description', {
    template: `
    <div style="width: 300px; padding: 50px;">
      <app-cat-card [cat]="cat"></app-cat-card>
    </div>
  `,
    context: {
      cat: { ...cat, description: undefined } as Cat
    }
  })
  .add('delete', {
    template: `
    <div style="width: 300px; padding: 50px;">
      <app-cat-card [cat]="cat"></app-cat-card>
    </div>
    <app-playground-setup></app-playground-setup>
  `,
    context: {
      cat
    },
    providers: [
      {
        provide: PlaygroundSetupService,
        useFactory: (store: Store) => {
          store.reset({
            app: {
              deleteMode: true
            }
          });
        },
        deps: [Store]
      }
    ]
  });
