import { Component, OnInit } from '@angular/core';
import { BebidaServicio } from '../modelo/BebidasServicio';
import { ConsultasService } from 'src/app/gestion/servicios/consultas-servicio/consultas.service';
import { PlatoServicio } from '../modelo/PlatosServicio';
import { FacturaDetalleIngresoDTO } from '../modelo/FacturaDetalleIngresoServicioDTO';
import { FacturaDetalleDTO } from '../modelo/FacturaDetalleServicioDTO';
import { MensajesDTO } from '../modelo/MensajesDTO';

@Component({
  selector: 'app-facturacion',
  templateUrl: './facturacion.component.html'
})
export class FacturacionComponent implements OnInit {

  public i = 1;
  public mensaje : MensajesDTO;
  public msn;
  public facturaDetalles : FacturaDetalleIngresoDTO;
  public detalles : FacturaDetalleDTO;
  
  public fechaActual : string;

  public bebidaObj : BebidaServicio;
  public bebidas : BebidaServicio[];

  public platoObj : PlatoServicio;
  public platos : PlatoServicio[];

  constructor(private consultasService: ConsultasService) { }

  ngOnInit() {

    this.facturaDetalles = {
      idCliente : 1,
      fechaCompra : this.fechaDato(),
      tipoPedido : 1,
      metodoPago : 1,
      detalles : []
    }
    //this.mensaje = "Hola mundo";
    this.mensaje = {
      mensajeId : 90,
      mensaje : "Mensaje Angular"
    }
    this.fechaActual = this.fechaInterfaz();
    this.bebidaObj = null;
    this.bebidas = null;
    this.platoObj = null;
    this.platos = null;
    this.consultarBebidas();
    this.consultarPlatos();
  }

  public fechaDato() : string{
        
    var f=new Date();

    
    if(f.getMonth() < 10){
      var mes = "0" + (f.getMonth() + 1);
    }

    if(f.getDate() < 10){
      var dia = "0" + f.getDate();
      return dia + "/" + mes + "/" + f.getFullYear();   
    }

    if(f.getDate() >= 10){
      return f.getDate() + "/" + mes + "/" + f.getFullYear();   
    }

     
  }


  public fechaInterfaz() : string{
    
    var meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
    var f=new Date();

    
    if(f.getDate() < 10){
      var dia = "0" + f.getDate();
      return dia + "/" + meses[f.getMonth()] + "/" + f.getFullYear();  
    }

    if(f.getDate() >= 10){
      return f.getDate() + "/" + meses[f.getMonth()] + "/" + f.getFullYear();  
    }
  }

  public consultarBebidas(){
    //this.bebidaObj = null;
    //this.bebidas = null;
    this.consultasService.consultarBebidas().subscribe(
      result => { 
        this.bebidas = result; 
        console.log('resultado servicio.... ' + this.bebidas);
      }, error => {
        console.log(error);
      }
    );
  }

  public consultarPlatos(){
    this.consultasService.consultarPlatos().subscribe(
      result => {
        this.platos = result; 
        console.log('resultado servicio..... ' + this.platos);
      }, error => {
        console.log(error);
      }
    );
  }

  public ingresarBebida(){
    this.detalles = {
      detalleId : 'Bebida prueba',
      facturaId : 3,
      platoId : 1,
      bebidaId : 1,
      precioUnitario : 5000,
      cantidad : 2
    };    
    this.facturaDetalles.detalles.push(this.detalles);
    this.i = this.i + 1;
  }

  actualizar(event):void{
    this.facturaDetalles.detalles = event.num;
  }


  public ingresarPlato(){
    /*this.detalles.detalleId = "prueba plato";
    this.detalles.facturaId = 2;
    this.detalles.platoId = 1;
    this.detalles.cantidad = 1;
    this.detalles.platoId = this.platoObj.platoId;
    this.detalles.precioUnitario = 5000;
    this.detalles.cantidad = 1;
    this.facturaDetalles.detalles.push(this.detalles);*/
  }

  public generarFactura(){
    this.facturaDetalles = {
      idCliente : 2,
      fechaCompra : "2019-05-17",
      tipoPedido : 2,
      metodoPago : 2,
      detalles : [{
        detalleId : "Angular 22",
        facturaId : 3,
        platoId : 1,
        bebidaId : 1,
        precioUnitario : 5000,
        cantidad : 8}]
    }

    this.consultasService.crearFactura(this.facturaDetalles).subscribe(
      result => {
        this.msn = result; 
        console.log('resultado servicio..... ' + this.msn);
      }, error => {
        console.log(error);
      }
    );
  }

  public crearMensaje(){
    //this.mensaje.mensajeId = 34;
    this.mensaje = {
      mensajeId : 90,
      mensaje : "Mensaje Angular"
    }

    this.consultasService.crearMensaje(this.mensaje).subscribe(
      result => {
        this.msn = result; 
        console.log('resultado servicio..... ' + this.msn);
      }, error => {
        console.log(error);
      }
    );
  }
}
