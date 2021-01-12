import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductosComponent } from './productos/productos.component';
import { InformesComponent } from './informes/informes.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'productos', component: ProductosComponent},
  {path: 'informes', component: InformesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
