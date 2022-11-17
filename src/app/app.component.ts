import { Component } from '@angular/core';
import { empleados } from './empleados';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'aplicación de mi empresa';
  public listaEmpleados = empleados;

  constructor() {
  }

  saludar(){
    alert('holas')
  }

}