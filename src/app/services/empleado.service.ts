import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Empleado } from '../model/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {


  private empleadoUrl: string;

  constructor(private http: HttpClient) {
    this.empleadoUrl = 'http://localhost:8080/';
  }

  public listarEmpleados() {
    return this.http.get<Empleado[]>(`${this.empleadoUrl}empleados`)
  }

  public crearEmpleado(empleado: Empleado){
    return this.http.post<Empleado>(`${this.empleadoUrl}empleados`, empleado);
  }

}
