import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Empleado } from '../model/empleado';
import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  private empleadoUrl: string;

  constructor(private http: HttpClient, private tokenStorage: TokenStorageService) {
    this.empleadoUrl = 'http://localhost:8080/';
  }

  public listarEmpleados() {
    return this.http.get<Empleado[]>(`${this.empleadoUrl}empleados`, { headers:{"Authorization": `Bearer ${this.tokenStorage.getToken()}`} })
  }

  public crearEmpleado(empleado: Empleado) {
    return this.http.post<Empleado>(`${this.empleadoUrl}empleados`, empleado);
  }

  public actualizarEmpleado(empleado: Empleado, idEmpleado: string) {
    return this.http.put<Empleado>(`${this.empleadoUrl}empleados/${idEmpleado}`, empleado);
  }

  public eliminarEmpleado(idEmpleado: string) {
    return this.http.delete<void>(`${this.empleadoUrl}empleados/${idEmpleado}`);
  }

  public obtenerEmpleado(idEmpleado: string) {
    return this.http.get<Empleado>(`${this.empleadoUrl}empleado`, { params: { idEmpleado: idEmpleado } })
  }

  public buscarPorNombre(nombre: string) {
    return this.http.get<Empleado>(`${this.empleadoUrl}empleados/${nombre}`)
  }
}
