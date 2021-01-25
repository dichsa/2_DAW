import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  productos = [] as any;
  constructor(private httpClient: HttpClient, private route: ActivatedRoute) { }
  ngOnInit(): void {
    console.log(`Current route: ${this.route}`);
    this.route.queryParams.subscribe(params => {
      console.table(params);
    });
    this.httpClient.get('http://localhost:8000/api/productos').subscribe(
      response => {
        this.productos = response;
      }
    );
  }

}

