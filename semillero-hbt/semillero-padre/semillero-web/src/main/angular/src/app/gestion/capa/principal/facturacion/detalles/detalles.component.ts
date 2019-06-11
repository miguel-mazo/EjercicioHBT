import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FacturaDetalleDTO } from '../../modelo/FacturaDetalleServicioDTO';

@Component({
  selector: 'app-facturacion-detalles',
  templateUrl: './detalles.component.html'
})
export class DetallesComponent implements OnInit {

  @Input() public mensaje : string;
  @Input() public detalles : FacturaDetalleDTO[];
  @Output() idcliente = new EventEmitter();

  public num:number;

  constructor() { this.num = 88}

  ngOnInit() {
  }

  public borrar(event, det : FacturaDetalleDTO){
    console.log('borrando....');
    this.detalles = this.detalles.filter(p => p.cantidad !== det.cantidad);
    this.idcliente.emit({num: this.detalles});
    this.num++;
  }

}
