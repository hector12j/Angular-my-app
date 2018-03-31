import { RouterModule, Routes } from '@angular/router';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';
// Services
import {EquipoService} from './equipo.service';

import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { FooterComponent } from './footer/footer.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CuerpoComponent } from './cuerpo/cuerpo.component';
import { NgclassComponent } from './ngclass/ngclass.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { NgifelseComponent } from './ngifelse/ngifelse.component';
import { AppRoutingModule } from './/app-routing.module';
import { InicioComponent } from './inicio/inicio.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { EquipoComponent } from './equipo/equipo.component';

const routes: Routes = [
  { path: 'contacto', component: ContactoComponent },
  { path: 'equipo/:id', component: EquipoComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: '', component: InicioComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    FooterComponent,
    ContactoComponent,
    InicioComponent,
    NosotrosComponent,
    EquipoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AlertModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
  EquipoService
  ],
  bootstrap: [
  AppComponent
  ]
})
export class AppModule { }
