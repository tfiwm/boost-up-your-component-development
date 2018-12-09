import { Component } from '@angular/core';
import { PlaygroundSetupService } from './playground-setup.service';

@Component({
  selector: 'app-playground-setup',
  template: ``,
  styles: []
})
export class PlaygroundSetupComponent {
  constructor(private playgroundSetupService: PlaygroundSetupService) {}
}
