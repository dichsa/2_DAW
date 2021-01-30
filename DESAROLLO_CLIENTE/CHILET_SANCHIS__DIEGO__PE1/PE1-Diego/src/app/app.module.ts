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
import { BotonUsuarioComponent } from './boton-usuario/boton-usuario.component';
import { BotonUsuario1Component } from './boton-usuario1/boton-usuario1.component';
import { BotonUsuario2Component } from './boton-usuario2/boton-usuario2.component';
import { DetalleProductosComponent } from './detalle-productos/detalle-productos.component';
import { DetalleUsuariosComponent } from './detalle-usuarios/detalle-usuarios.component';
import { NuevosProductosComponent } from './productos/nuevos-productos/nuevos-productos.component'; 
import { FormsModule } from '@angular/forms';
import { NuevosUsuariosComponent } from './usuarios/nuevos-usuarios/nuevos-usuarios.component';
import { AltasUsuariosComponent } from './altas-usuarios/altas-usuarios.component';
import { ContactoComponent } from './contacto/contacto.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    InformesComponent,
    UsuariosComponent,
    HomeComponent,
    BotonProducto1Component,
    BotonProducto2Component,
    BotonProductoComponent,
    BotonUsuarioComponent,
    BotonUsuario1Component,
    BotonUsuario2Component,
    DetalleProductosComponent,
    DetalleUsuariosComponent,
    NuevosProductosComponent,
    NuevosUsuariosComponent,
    AltasUsuariosComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
