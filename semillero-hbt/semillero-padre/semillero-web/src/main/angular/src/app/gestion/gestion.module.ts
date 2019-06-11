import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CapaComponent } from './capa/capa.component';
import { EncabezadoComponent } from './capa/encabezado/encabezado.component';
import { PrincipalComponent } from './capa/principal/principal.component';
import { FacturacionComponent } from './capa/principal/facturacion/facturacion.component';
import { ConsultasService } from './servicios/consultas-servicio/consultas.service';
import { DetallesComponent } from './capa/principal/facturacion/detalles/detalles.component';

@NgModule({
  declarations: [CapaComponent, EncabezadoComponent, PrincipalComponent, FacturacionComponent, DetallesComponent],
  imports: [
    CommonModule,RouterModule,FormsModule
  ],
  exports: [
  	CapaComponent
  ],
  providers: [
    ConsultasService
  ]
})
export class GestionModule { }
