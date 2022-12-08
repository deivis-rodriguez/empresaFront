import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  private TOKEN_KEY: string = 'jwt_token';
  constructor() { }

  guardarToken(token: string) {
    window.sessionStorage.removeItem(this.TOKEN_KEY);
    window.sessionStorage.setItem(this.TOKEN_KEY, token);
  }

  getToken(): string | null{
    return window.sessionStorage.getItem(this.TOKEN_KEY);
  }

  signOut(){
    window.sessionStorage.clear();
  }
}
