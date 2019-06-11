import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FacturacionComponent } from './gestion/capa/principal/facturacion/facturacion.component';
import { PrincipalComponent } from './gestion/capa/principal/principal.component';

const routes: Routes = [
  {  	path: 'factura-generar', component: FacturacionComponent},
  //{  	path: 'detalles-ver', component: DetallesComponent},
  {   path: '', component: PrincipalComponent},
  {   path: '**', component: PrincipalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
