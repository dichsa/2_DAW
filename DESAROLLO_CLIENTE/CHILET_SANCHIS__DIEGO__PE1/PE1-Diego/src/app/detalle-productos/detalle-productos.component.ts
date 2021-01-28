import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-detalle-productos',
  templateUrl: './detalle-productos.component.html',
  styleUrls: ['./detalle-productos.component.css']
})
export class DetalleProductosComponent implements OnInit {

  productos = <any>[];
  usuarios = <any>[];
  getId: any;

  constructor(private httpClient: HttpClient, private activatedRoute: ActivatedRoute ) { 
    this.getId = this.activatedRoute.snapshot.paramMap.get('id');
   }

   ngOnInit(): void {
    this.httpClient.get('http://localhost:8000/api/productos').subscribe(
      response => {
        this.productos = response;
      });
  }


  public detalle(productos: any) {
    const id = productos.id;
    const rute = 'http://localhost:8000/api/producto/' + id;

    this.httpClient.get(rute).subscribe(
      response => {
        this.productos = response;
      }
    );

  }
}

