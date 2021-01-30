import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from './model/producto';
import { NgModule } from '@angular/core';

const cabecera = {headers: new HttpHeaders({'Content-TYpe': 'application/json'})};

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  productoURL = 'http://localhost:8000/api/producto';

  constructor(private httpClient: HttpClient) { }

  public crear(producto: Producto) {
    return this.httpClient.post<any>(this.productoURL, producto, cabecera);
  }
}