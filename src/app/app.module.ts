import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CatCardComponent } from './cat-card/cat-card.component';
import { MatCardModule, MatMenuModule, MatIconModule, MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [AppComponent, CatCardComponent],
  imports: [BrowserModule, BrowserAnimationsModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
