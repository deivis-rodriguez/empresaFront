import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ListarEmpleadosComponent } from './listar-empleados/listar-empleados.component';
import { InicioComponent } from './inicio/inicio.component';
import { DetalleEmpleadoComponent } from './detalle-empleado/detalle-empleado.component';
import { EmpleadoService } from './services/empleado.service';
import { CrearEmpleadoComponent } from './crear-empleado/crear-empleado.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListarEmpleadosComponent,
    InicioComponent,
    DetalleEmpleadoComponent,
    CrearEmpleadoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [EmpleadoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
