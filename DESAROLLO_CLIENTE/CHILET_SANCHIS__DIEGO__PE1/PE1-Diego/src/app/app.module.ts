import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductosComponent } from './productos/productos.component';
import { InformesComponent } from './informes/informes.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { HomeComponent } from './home/home.component';
import { BotonProducto1Component } from './boton-producto1/boton-producto1.component';
import { BotonProducto2Component } from './boton-producto2/boton-producto2.component';
import { BotonProductoComponent } from './boton-producto/boton-producto.component'; 


@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    InformesComponent,
    UsuariosComponent,
    HomeComponent,
    BotonProducto1Component,
    BotonProducto2Component,
    BotonProductoComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
