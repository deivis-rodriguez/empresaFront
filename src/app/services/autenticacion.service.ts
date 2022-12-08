import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../model/login';
import { registro } from '../model/registro';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  private urlBase = "http://localhost:8080/api/auth/";

  constructor(private http: HttpClient) { }

  public login(login: Login) {
    return this.http.post(`${this.urlBase}signin`, login);
  }

  public registro(registro: registro){
    return this.http.post(`${this.urlBase}signup`, registro);
  }

}
