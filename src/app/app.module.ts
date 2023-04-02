import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExemploNgifComponent } from './views/exemplo-ngif/exemplo-ngif.component';
import { Ex01Component } from './views/ex01/ex01.component';
import { Ex02Component } from './views/ex02/ex02.component';
import { Ex03Component } from './views/ex03/ex03.component';
import { Ex04Component } from './views/ex04/ex04.component';
import { Ex05Component } from './views/ex05/ex05.component';
import { ExemploNgforComponent } from './views/exemplo-ngfor/exemplo-ngfor.component';
import { ExFor01Component } from './views/ex-for01/ex-for01.component';
import { ExFor02Component } from './views/ex-for02/ex-for02.component';
import { ExFor03Component } from './views/ex-for03/ex-for03.component';
import { ExFor04Component } from './views/ex-for04/ex-for04.component';
import { ExFor05Component } from './views/ex-for05/ex-for05.component';

@NgModule({
  declarations: [
    AppComponent,
    ExemploNgifComponent,
    Ex01Component,
    Ex02Component,
    Ex03Component,
    Ex04Component,
    Ex05Component,
    ExemploNgforComponent,
    ExFor01Component,
    ExFor02Component,
    ExFor03Component,
    ExFor04Component,
    ExFor05Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
