import { BrowserModule } from '@angular/platform-browser';
import{ BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PractiseanimationComponent } from './practise-animation/practiseanimation.component';
import { AnotherAnimationComponent } from './another-animation/another-animation.component';
import { RouterModule, Routes } from '@angular/router';


const appRoutes: Routes = [
  {
    path: '',
    component:PractiseanimationComponent
  },
  {
    path: 'another',
    component:AnotherAnimationComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    PractiseanimationComponent,
    AnotherAnimationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
