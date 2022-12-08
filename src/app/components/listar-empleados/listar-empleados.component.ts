import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { EmpleadoService } from '../../services/empleado.service';
import { Empleado } from '../../model/empleado';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-listar-empleados',
  templateUrl: './listar-empleados.component.html',
  styleUrls: ['./listar-empleados.component.css']
})
export class ListarEmpleadosComponent implements OnInit {
  public listaEmpleados: Empleado[];
  public mostrar: boolean = false;
  public indice!: number;

  constructor( private empleadoService: EmpleadoService, private tokenStorage: TokenStorageService, private location: Location) {
    this.listaEmpleados = []
  }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.empleadoService.listarEmpleados().subscribe((empleados) => {
        this.listaEmpleados = empleados;
      });
    }else{
      this.location.replaceState("/login")
      window.location.reload()
    }

    
  }

}
