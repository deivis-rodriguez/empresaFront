import { Component, OnInit } from '@angular/core';
import { Empleado } from '../model/empleado';

@Component({
  selector: 'app-editar-empleado',
  templateUrl: '../crear-empleado/crear-empleado.component.html',
  styleUrls: ['./editar-empleado.component.css']
})
export class EditarEmpleadoComponent implements OnInit {
  public empleado: Empleado;
  public i: number = 1;

  constructor() {
    this.empleado = new Empleado('', '', '', '', [])
  }

  ngOnInit(): void {
  }

  guardarEmpleado() {

  }

  actualizarIn(){
    this.i++;
    console.log(this.i)
  }

}
