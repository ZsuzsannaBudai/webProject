import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainPageComponent} from "./main-page/main-page.component";
import {AktualisComponent} from "./aktualis/aktualis.component";
import {ReferenciaComponent} from "./referencia/referencia.component";
import {IdopontComponent} from "./idopont/idopont.component";
import {KapcsolatComponent} from "./kapcsolat/kapcsolat.component";

const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'aktualis', component: AktualisComponent},
  {path: 'referencia', component: ReferenciaComponent},
  {path: 'idopont', component: IdopontComponent},
  {path: 'kapcsolat', component: KapcsolatComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
