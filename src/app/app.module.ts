import { BrowserModule } from '@angular/platform-browser';
import{ BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PractiseanimationComponent } from './practise-animation/practiseanimation.component';


@NgModule({
  declarations: [
    AppComponent,
    PractiseanimationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
