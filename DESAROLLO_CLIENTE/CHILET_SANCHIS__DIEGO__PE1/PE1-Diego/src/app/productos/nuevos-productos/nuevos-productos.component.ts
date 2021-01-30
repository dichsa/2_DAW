import { Component, OnInit } from '@angular/core';
import { Producto } from '../model/producto';
import { ProductoService } from '../producto.service';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-nuevos-productos',
  templateUrl: './nuevos-productos.component.html',
  styleUrls: ['./nuevos-productos.component.css']
})
export class NuevosProductosComponent implements OnInit {

  form: any = {};
  producto = {} as any;
  creado = false;
  failProducto = false;
  mensajeFail = '';
  mensajeOK = '';

  constructor(private productoService: ProductoService) { }

  ngOnInit() {
  }

    onCreate(): void {
      this.productoService.crear(this.form).subscribe(data => {
        this.mensajeOK = data.mensaje;
        this.creado = true;
        this.failProducto = false;
      },
        (err: any) => {
          this.mensajeFail = err.error.mensaje;
          this.creado = false;
          this.failProducto = true;
        }
      );
    }
  
    volver(): void {
      window.history.back();
    }
  
  }