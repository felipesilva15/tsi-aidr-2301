import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropbindComponent } from './views/propbind/propbind.component';
import { Ex01Component } from './views/ex01/ex01.component';
import { Exercicio01Component } from './views/exercicio01/exercicio01.component';
import { Exercicio02Component } from './views/exercicio02/exercicio02.component';
import { Exercicio03Component } from './views/exercicio03/exercicio03.component';
import { Exercicio04Component } from './views/exercicio04/exercicio04.component';
import { Exercicio05Component } from './views/exercicio05/exercicio05.component';
import { Exercicio06Component } from './views/exercicio06/exercicio06.component';
import { Exercicio07Component } from './views/exercicio07/exercicio07.component';
import { Exercicio08Component } from './views/exercicio08/exercicio08.component';
import { Exercicio09Component } from './views/exercicio09/exercicio09.component';
import { Exercicio10Component } from './views/exercicio10/exercicio10.component';

@NgModule({
  declarations: [
    AppComponent,
    PropbindComponent,
    Ex01Component,
    Exercicio01Component,
    Exercicio02Component,
    Exercicio03Component,
    Exercicio04Component,
    Exercicio05Component,
    Exercicio06Component,
    Exercicio07Component,
    Exercicio08Component,
    Exercicio09Component,
    Exercicio10Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
