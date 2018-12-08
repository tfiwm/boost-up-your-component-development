import { sandboxOf } from 'angular-playground';
import { CatToolbarComponent } from './cat-toolbar.component';
import { MatToolbarModule, MatIconModule, MatButtonModule } from '@angular/material';

export default sandboxOf(CatToolbarComponent, { imports: [MatToolbarModule, MatButtonModule, MatIconModule] }).add(
  'default',
  {
    template: `<app-cat-toolbar></app-cat-toolbar>`
  }
);
