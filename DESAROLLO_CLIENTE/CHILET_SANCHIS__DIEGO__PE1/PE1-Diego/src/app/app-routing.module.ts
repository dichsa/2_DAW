import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductosComponent } from './productos/productos.component';
import { InformesComponent } from './informes/informes.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { HomeComponent } from './home/home.component';
import { DetalleProductosComponent } from './detalle-productos/detalle-productos.component';
import { DetalleUsuariosComponent } from './detalle-usuarios/detalle-usuarios.component'; 

const routes: Routes = [
  {path: 'productos', component: ProductosComponent},
  {path: 'informes', component: InformesComponent},
  {path: 'usuarios', component: UsuariosComponent},
  {path: 'detalle-productos/:id', component: DetalleProductosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
