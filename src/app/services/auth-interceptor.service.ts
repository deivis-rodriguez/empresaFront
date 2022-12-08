import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private tokenStorage: TokenStorageService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.tokenStorage.getToken();
    if (token != null) {
      return next.handle(req.clone({ headers: req.headers.set("Authorization", `Bearer ${this.tokenStorage.getToken()}`) }));
    } else {
      return next.handle(req);
    }
  }
}
