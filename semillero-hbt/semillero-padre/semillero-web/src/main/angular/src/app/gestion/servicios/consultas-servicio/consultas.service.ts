import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/toPromise';
import { AbstractService } from '../template.service';
import { BebidaServicio } from '../../capa/principal/modelo/BebidasServicio';
import { PlatoServicio } from '../../capa/principal/modelo/PlatosServicio';
import { FacturaDetalleIngresoDTO } from '../../capa/principal/modelo/FacturaDetalleIngresoServicioDTO';
import { MensajesDTO } from '../../capa/principal/modelo/MensajesDTO';

@Injectable({
    providedIn: 'root'
  })
  export class ConsultasService extends AbstractService {

    /**
     * Constructor
     */
    constructor(injector: Injector) {
        super(injector);
    }

    public crearFactura(facturaDetalle : FacturaDetalleIngresoDTO) : Observable<string>{
        return this.post<string>("/semillero-servicios", "/ConsultasRest/crearFactura", facturaDetalle);
    }

    public consultarBebidas() : Observable<BebidaServicio[]>{
        return this.get<BebidaServicio[]>("/semillero-servicios", "/ConsultasRest/consultarBebidas");
    }

    public consultarPlatos() : Observable<PlatoServicio[]>{
        return this.get<PlatoServicio[]>("/semillero-servicios", "/ConsultasRest/consultarPlatos");
    }

    public crearMensaje(mensaje : MensajesDTO) : Observable<string>{
        return this.post<string>("/semillero-servicios", "/ConsultasRest/crearMensaje", mensaje);
    }

}