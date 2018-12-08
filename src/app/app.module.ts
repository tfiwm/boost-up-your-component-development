import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CatCardComponent } from './cat-card/cat-card.component';
import { MatCardModule, MatIconModule, MatButtonModule, MatToolbarModule } from '@angular/material';
import { CatListComponent } from './cat-list/cat-list.component';
import { CatToolbarComponent } from './cat-toolbar/cat-toolbar.component';

@NgModule({
  declarations: [AppComponent, CatCardComponent, CatListComponent, CatToolbarComponent],
  imports: [BrowserModule, BrowserAnimationsModule, MatCardModule, MatIconModule, MatButtonModule, MatToolbarModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
