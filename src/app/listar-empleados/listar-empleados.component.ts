import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { EmpleadoService } from '../services/empleado.service';
import { Empleado } from '../model/empleado';

@Component({
  selector: 'app-listar-empleados',
  templateUrl: './listar-empleados.component.html',
  styleUrls: ['./listar-empleados.component.css']
})
export class ListarEmpleadosComponent implements OnInit {
  public listaEmpleados: Empleado[];
  public mostrar: boolean = false;
  public indice!: number;

  constructor(private location: Location, private empleadoService: EmpleadoService) {
    this.listaEmpleados = []
  }

  ngOnInit(): void {
    this.empleadoService.listarEmpleados().subscribe((empleados) => {
      this.listaEmpleados = empleados;
    });
  }

}
