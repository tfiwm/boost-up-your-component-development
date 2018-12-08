import { sandboxOf } from 'angular-playground';
import { CatCardComponent } from './cat-card.component';

export default sandboxOf(CatCardComponent).add('default', {
  template: `<app-cat-card></app-cat-card>`
});
