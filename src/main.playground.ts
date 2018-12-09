import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { PlaygroundModule } from 'angular-playground';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxsModule } from '@ngxs/store';

PlaygroundModule.configure({
  selector: 'app-root',
  overlay: true,
  modules: [BrowserAnimationsModule, NgxsModule.forRoot([])]
});

platformBrowserDynamic().bootstrapModule(PlaygroundModule);
