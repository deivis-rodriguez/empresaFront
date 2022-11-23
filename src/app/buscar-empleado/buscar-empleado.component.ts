import { Component, OnInit } from '@angular/core';
import { Empleado } from '../model/empleado';
import { EmpleadoService } from '../services/empleado.service';

@Component({
  selector: 'app-buscar-empleado',
  templateUrl: './buscar-empleado.component.html',
  styleUrls: ['./buscar-empleado.component.css']
})
export class BuscarEmpleadoComponent implements OnInit {

  public nombreEmpleado: string = '';
  public empleado !: Empleado;

  constructor(private empleadoServicio: EmpleadoService) {
  }

  ngOnInit(): void {
  }

  buscarPorNombre() {
    this.empleadoServicio.buscarPorNombre(this.nombreEmpleado).subscribe(
      (empleado) => {
        this.empleado = empleado;
      }
    )
  }

}
