import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html'
})
export class EncabezadoComponent implements OnInit {

  public titulo = "FACTURACIÓN";

  constructor() { }

  ngOnInit() {
  }

}
