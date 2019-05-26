import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CatCardComponent } from './cat-card/cat-card.component';
import { MatCardModule, MatIconModule, MatButtonModule, MatToolbarModule } from '@angular/material';
import { CatListComponent } from './cat-list/cat-list.component';
import { CatToolbarComponent } from './cat-toolbar/cat-toolbar.component';
import { CatPageComponent } from './cat-page/cat-page.component';
import { CatPageService } from './cat-page/cat-page.service';
import { AppState } from './state/app.state';
import { environment } from 'src/environments/environment';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent, CatCardComponent, CatListComponent, CatToolbarComponent, CatPageComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    NgxsModule.forRoot([AppState], { developmentMode: !environment.production }),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [CatPageService],
  bootstrap: [AppComponent]
})
export class AppModule {}
