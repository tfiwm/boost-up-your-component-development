import { sandboxOf } from 'angular-playground';
import { CatPageComponent } from './cat-page.component';
import { MatCardModule, MatIconModule, MatButtonModule, MatToolbarModule } from '@angular/material';
import { CatCardComponent } from '../cat-card/cat-card.component';
import { CatToolbarComponent } from '../cat-toolbar/cat-toolbar.component';
import { CatListComponent } from '../cat-list/cat-list.component';
import { CatPageService } from './cat-page.service';
import { throwError } from 'rxjs';
import { NgxsModule, Store } from '@ngxs/store';
import { AppState } from '../state/app.state';
import { PlaygroundSetupService } from 'src/playground-helper';

export default sandboxOf(CatPageComponent, {
  imports: [MatCardModule, MatIconModule, MatButtonModule, MatToolbarModule, NgxsModule.forFeature([AppState])],
  declarations: [CatToolbarComponent, CatListComponent, CatCardComponent],
  providers: [CatPageService]
})
  .add('default', {
    template: `<app-cat-page></app-cat-page>`
  })
  .add('error loading cats', {
    template: `
      <app-cat-page></app-cat-page>
      <app-playground-setup></app-playground-setup>
    `,
    providers: [
      {
        provide: PlaygroundSetupService,
        useFactory: (store: Store) => {
          store.reset({
            app: {
              deleteMode: false,
              catsList: [],
              errorLoadingCatsList: true
            }
          });
        },
        deps: [Store]
      }
    ]
  });
