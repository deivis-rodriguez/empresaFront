import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/model/login';
import { AutenticacionService } from 'src/app/services/autenticacion.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginData: Login = { username: '', password: '' };
  public error: boolean = false;
  public msgError:string = '';

  constructor(private auth: AutenticacionService, private tokenStorage: TokenStorageService, private location: Location) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.location.replaceState("/inicio")
      window.location.reload()
    }else{
      
    }
  }

  login() {
    this.auth.login(this.loginData).subscribe({
      next: (res: any) => {
        this.tokenStorage.guardarToken(res.jwt)
        this.ngOnInit()
      },
      error: err => {
        this.error = true
        this.msgError = err.error.mensaje
      }
    })
  }

}
