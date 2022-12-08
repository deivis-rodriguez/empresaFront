import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Empleado } from '../../model/empleado';
import { EmpleadoService } from '../../services/empleado.service';

@Component({
  selector: 'app-crear-empleado',
  templateUrl: './crear-empleado.component.html',
  styleUrls: ['./crear-empleado.component.css']
})
export class CrearEmpleadoComponent implements OnInit {

  public empleado: Empleado;
  public titulo: string = 'Ingresar nuevo empleado';

  constructor(private empleadoService: EmpleadoService, private location: Location) {
    this.empleado = new Empleado('', '', '', '', [])
    this.empleado.proyectos = []
  }

  ngOnInit(): void {
  }

  guardarEmpleado() {
    this.empleadoService.crearEmpleado(this.empleado).subscribe((empleado) => {
      alert('empleado guardado');
      this.location.back()
    })
  }

  actualizarIn($event: Event){
    let signo: string = String(($event.target as HTMLButtonElement).textContent);
    console.log(this.empleado);

    if (signo == '+') {
      this.empleado.proyectos.push({ nombre: '', codigo: '', fechaInicio: new Date(), fechaFin: new Date() });
    } else {
      this.empleado.proyectos.pop();
    }
  }
}
