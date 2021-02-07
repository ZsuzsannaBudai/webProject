import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import { AktualisComponent } from './aktualis/aktualis.component';
import { ReferenciaComponent } from './referencia/referencia.component';
import { IdopontComponent } from './idopont/idopont.component';
import { KapcsolatComponent } from './kapcsolat/kapcsolat.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    AktualisComponent,
    ReferenciaComponent,
    IdopontComponent,
    KapcsolatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
