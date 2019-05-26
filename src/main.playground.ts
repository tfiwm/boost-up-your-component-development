import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ServiceWorkerModule } from '@angular/service-worker';
import { PlaygroundModule } from 'angular-playground';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxsModule } from '@ngxs/store';
import { PlaygroundSetupModule } from './playground-helper';

PlaygroundModule.configure({
  selector: 'app-root',
  overlay: true,
  modules: [
    environment.production
        ? ServiceWorkerModule.register('/ngsw-worker.js')
        : []
    BrowserAnimationsModule, NgxsModule.forRoot([]), PlaygroundSetupModule]
});

platformBrowserDynamic().bootstrapModule(PlaygroundModule);
