import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CrearEmpleadoComponent } from "./crear-empleado/crear-empleado.component";
import { InicioComponent } from "./inicio/inicio.component";
import { ListarEmpleadosComponent } from "./listar-empleados/listar-empleados.component";

const routes: Routes=[
    {path:'',redirectTo: 'inicio', pathMatch: 'full' },
    {path:'inicio', component: InicioComponent},
    {path:'lista-empleados', component: ListarEmpleadosComponent},
    {path:'agregar-empleado', component: CrearEmpleadoComponent},
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{}