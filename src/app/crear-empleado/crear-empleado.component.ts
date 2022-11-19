import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Empleado } from '../model/empleado';
import { EmpleadoService } from '../services/empleado.service';

@Component({
  selector: 'app-crear-empleado',
  templateUrl: './crear-empleado.component.html',
  styleUrls: ['./crear-empleado.component.css']
})
export class CrearEmpleadoComponent implements OnInit {

  public empleado: Empleado;

  constructor(private empleadoService: EmpleadoService, private location: Location) {
    this.empleado = new Empleado('', '', '', '', [])
  }

  ngOnInit(): void {
  }


  guardarEmpleado(){
    this.empleadoService.crearEmpleado(this.empleado).subscribe((empleado)=>{
      alert('empleado guardado');
      this.location.back()
    })
  }
}
