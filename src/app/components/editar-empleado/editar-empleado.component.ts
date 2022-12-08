import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Empleado } from '../../model/empleado';
import { EmpleadoService } from '../../services/empleado.service';

@Component({
  selector: 'app-editar-empleado',
  templateUrl: '../crear-empleado/crear-empleado.component.html',
  styleUrls: ['./editar-empleado.component.css']
})
export class EditarEmpleadoComponent implements OnInit {
  public empleado: Empleado;
  public titulo: string = 'Editar datos del empleado';

  constructor(private location: Location, private empleadoService: EmpleadoService, private ruta: ActivatedRoute) {
    this.empleado = new Empleado('', '', '', '', [])
  }

  ngOnInit(): void {
    let id: string = String(this.ruta.snapshot.paramMap.get('id'));
    this.empleadoService.obtenerEmpleado(id).subscribe((empleado) => {
      this.empleado = empleado;
    });
  }

  guardarEmpleado() {
    let id: string = String(this.ruta.snapshot.paramMap.get('id'));
    this.empleadoService.actualizarEmpleado(this.empleado, id).subscribe(
      (empleado)=>{
        console.log(empleado);
        alert('Empleado actualizado')
        this.location.back()
      }
    )


  }

  actualizarIn($event: Event) {

    let signo: string = String(($event.target as HTMLButtonElement).textContent);
    console.log(this.empleado);

    if (signo == '+') {
      this.empleado.proyectos.push({ nombre: '', codigo: '', fechaInicio: new Date(), fechaFin: new Date() });
    } else {
      this.empleado.proyectos.pop();
    }
  }

}
