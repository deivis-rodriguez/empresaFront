import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Empleado } from '../model/empleado';

@Component({
  selector: 'app-detalle-empleado',
  templateUrl: './detalle-empleado.component.html',
  styleUrls: ['./detalle-empleado.component.css']
})
export class DetalleEmpleadoComponent implements OnInit {

  @Input() public empleado !: Empleado;

  @Output() public areaEvent = new EventEmitter<string>()
  @Output() public pagoEvent = new EventEmitter<number>()

  public pago: string = '';

  constructor() {
  }

  ngOnInit(): void {
  }

  actualizarArea(area: string) {
    this.areaEvent.emit(area);
  }

  actualizarPago(pago: string){
    this.pagoEvent.emit(parseInt(pago))
  }

}
