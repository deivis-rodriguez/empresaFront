import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AyudaComponent } from "./components/ayuda/ayuda.component";
import { BuscarEmpleadoComponent } from "./components/buscar-empleado/buscar-empleado.component";
import { CrearEmpleadoComponent } from "./components/crear-empleado/crear-empleado.component";
import { DetalleEmpleadoComponent } from "./components/detalle-empleado/detalle-empleado.component";
import { EditarEmpleadoComponent } from "./components/editar-empleado/editar-empleado.component";
import { InicioComponent } from "./components/inicio/inicio.component";
import { ListarEmpleadosComponent } from "./components/listar-empleados/listar-empleados.component";
import { LoginComponent } from "./components/login/login.component";

const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'inicio', component: InicioComponent },
    { path: 'login', component: LoginComponent },
    { path: 'lista-empleados', component: ListarEmpleadosComponent },
    { path: 'agregar-empleado', component: CrearEmpleadoComponent },
    { path: 'detalle-empleado/:id', component: DetalleEmpleadoComponent },
    { path: 'editar-empleado/:id', component: EditarEmpleadoComponent },
    { path: 'buscar-empleado', component: BuscarEmpleadoComponent },
    { path: 'ayuda', component: AyudaComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }