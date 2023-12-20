import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { menuComponent } from './Componentes/Menu/menu.component';
import { CuerpoComponent } from './Componentes/Cuerpo/Cuerpo.component';

@NgModule({
  declarations: [
    AppComponent,
    menuComponent,
    CuerpoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
