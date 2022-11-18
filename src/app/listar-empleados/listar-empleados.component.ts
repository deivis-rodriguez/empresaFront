import { Component, OnInit } from '@angular/core';
import { empleados } from '../empleados';
import { Location } from '@angular/common';

@Component({
  selector: 'app-listar-empleados',
  templateUrl: './listar-empleados.component.html',
  styleUrls: ['./listar-empleados.component.css']
})
export class ListarEmpleadosComponent implements OnInit {
  public listaEmpleados = empleados;
  public mostrar: boolean = false;
  public indice!: number;
  

  constructor(private location: Location) { }

  ngOnInit(): void {
  }

  mostrarDetalle(index: number) {
    this.mostrar = !this.mostrar;
    this.indice = index;
  }

  actualizarArea(area:string){
    console.log(area)
    this.listaEmpleados[this.indice].area = area;
  }

  actualizarPago(pago:number){
    console.log(pago)
    this.listaEmpleados[this.indice].pagos.push(pago);
    console.log(this.listaEmpleados[this.indice].pagos)
    this.location.back()
  }

}
