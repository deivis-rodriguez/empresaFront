import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CrearEmpleadoComponent } from "./crear-empleado/crear-empleado.component";
import { DetalleEmpleadoComponent } from "./detalle-empleado/detalle-empleado.component";
import { EditarEmpleadoComponent } from "./editar-empleado/editar-empleado.component";
import { InicioComponent } from "./inicio/inicio.component";
import { ListarEmpleadosComponent } from "./listar-empleados/listar-empleados.component";

const routes: Routes = [
    { path: '', redirectTo: 'inicio', pathMatch: 'full' },
    { path: 'inicio', component: InicioComponent },
    { path: 'lista-empleados', component: ListarEmpleadosComponent },
    { path: 'agregar-empleado', component: CrearEmpleadoComponent },
    { path: 'detalle-empleado/:id', component: DetalleEmpleadoComponent },
    { path: 'editar-empleado/:id', component: EditarEmpleadoComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }