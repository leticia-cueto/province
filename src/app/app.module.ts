import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbuttonComponent } from './topbutton/topbutton.component';
import { BottombuttonComponent } from './bottombutton/bottombutton.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbuttonComponent,
    BottombuttonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
