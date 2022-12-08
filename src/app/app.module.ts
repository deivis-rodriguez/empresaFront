import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './components/app.component';
import { HeaderComponent } from './components/header/header.component';
import { ListarEmpleadosComponent } from './components/listar-empleados/listar-empleados.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { DetalleEmpleadoComponent } from './components/detalle-empleado/detalle-empleado.component';
import { EmpleadoService } from './services/empleado.service';
import { CrearEmpleadoComponent } from './components/crear-empleado/crear-empleado.component';
import { EditarEmpleadoComponent } from './components/editar-empleado/editar-empleado.component';
import { BuscarEmpleadoComponent } from './components/buscar-empleado/buscar-empleado.component';
import { LoginComponent } from './components/login/login.component';
import { AyudaComponent } from './components/ayuda/ayuda.component';
import { AuthInterceptorService } from './services/auth-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListarEmpleadosComponent,
    InicioComponent,
    DetalleEmpleadoComponent,
    CrearEmpleadoComponent,
    EditarEmpleadoComponent,
    BuscarEmpleadoComponent,
    LoginComponent,
    AyudaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [{ provide:HTTP_INTERCEPTORS, useClass:AuthInterceptorService, multi:true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
