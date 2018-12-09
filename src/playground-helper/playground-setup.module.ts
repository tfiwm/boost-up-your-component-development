import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaygroundSetupComponent } from './playground-setup.component';

@NgModule({
  declarations: [PlaygroundSetupComponent],
  exports: [PlaygroundSetupComponent],
  imports: [CommonModule]
})
export class PlaygroundSetupModule {}
