import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CatCardComponent } from './cat-card/cat-card.component';
import { MatCardModule, MatIconModule, MatButtonModule } from '@angular/material';
import { CatListComponent } from './cat-list/cat-list.component';

@NgModule({
  declarations: [AppComponent, CatCardComponent, CatListComponent],
  imports: [BrowserModule, BrowserAnimationsModule, MatCardModule, MatIconModule, MatButtonModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
