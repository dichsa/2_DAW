import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  productos = <any>[];
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get('http://localhost:8000/api/productos').subscribe(
      response => { this.productos = response;
    console.log(this.productos);});
      }

    public removeProducto (producto:any) {

      const id = producto.id;
      const ruta= 'http://localhost:8000/api/producto/'+id;

      this.httpClient.delete(ruta).subscribe(
        response => { 
          this.productos = response;
      });  
    }
  }
