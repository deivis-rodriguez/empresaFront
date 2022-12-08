import { Location } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Empleado } from '../../model/empleado';
import { EmpleadoService } from '../../services/empleado.service';

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

  constructor(private location: Location, private empleadoService: EmpleadoService, private ruta: ActivatedRoute) {
    this.empleado = new Empleado('', '', '', '', [])
  }

  ngOnInit(): void {
    let id: string = String(this.ruta.snapshot.paramMap.get('id'));
    if (id != 'null') {
      this.empleadoService.obtenerEmpleado(id).subscribe((empleado) => {
        this.empleado = empleado;
      });
    }

  }

  eliminarEmpleado() {
    let id: string = String(this.ruta.snapshot.paramMap.get('id'));

    this.empleadoService.eliminarEmpleado(id).subscribe(() => {
      alert('empleado eliminado exitosamente')
      this.regresar()
    });

  }

  regresar() {
    this.location.back()
  }

}
