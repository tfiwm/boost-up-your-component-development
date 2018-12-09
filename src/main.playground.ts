import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { PlaygroundModule } from 'angular-playground';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxsModule } from '@ngxs/store';
import { PlaygroundSetupModule } from './playground-helper';

PlaygroundModule.configure({
  selector: 'app-root',
  overlay: true,
  modules: [BrowserAnimationsModule, NgxsModule.forRoot([]), PlaygroundSetupModule]
});

platformBrowserDynamic().bootstrapModule(PlaygroundModule);
