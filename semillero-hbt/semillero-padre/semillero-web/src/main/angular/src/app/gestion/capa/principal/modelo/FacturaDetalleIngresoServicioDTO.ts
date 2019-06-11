import { FacturaDetalleDTO } from './FacturaDetalleServicioDTO';

export interface FacturaDetalleIngresoDTO{
    detalles : FacturaDetalleDTO[];
    idCliente : number;
    fechaCompra : string;
    tipoPedido : number;
    metodoPago : number;
}