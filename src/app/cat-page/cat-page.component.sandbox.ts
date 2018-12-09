import { sandboxOf } from 'angular-playground';
import { CatPageComponent } from './cat-page.component';
import { MatCardModule, MatIconModule, MatButtonModule, MatToolbarModule } from '@angular/material';
import { CatCardComponent } from '../cat-card/cat-card.component';
import { CatToolbarComponent } from '../cat-toolbar/cat-toolbar.component';
import { CatListComponent } from '../cat-list/cat-list.component';
import { Cat } from '../model/cat.model';
import { CatPageService } from './cat-page.service';
import { throwError } from 'rxjs';

export default sandboxOf(CatPageComponent, {
  imports: [MatCardModule, MatIconModule, MatButtonModule, MatToolbarModule],
  declarations: [CatToolbarComponent, CatListComponent, CatCardComponent],
  providers: [CatPageService]
})
  .add('default', {
    template: `<app-cat-page></app-cat-page>`
  })
  .add('error loading cats', {
    template: `<app-cat-page></app-cat-page>`,
    providers: [
      {
        provide: CatPageService,
        useValue: {
          getCats: () => throwError('Soem error')
        }
      }
    ]
  });
