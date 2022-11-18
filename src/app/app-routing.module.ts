import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { InicioComponent } from "./inicio/inicio.component";
import { ListarEmpleadosComponent } from "./listar-empleados/listar-empleados.component";

const routes: Routes=[
    {path:'',redirectTo: 'inicio', pathMatch: 'full' },
    {path:'inicio', component: InicioComponent},
    {path:'lista-empleados', component: ListarEmpleadosComponent},
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{}