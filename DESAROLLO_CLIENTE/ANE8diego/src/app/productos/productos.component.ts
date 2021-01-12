import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-productos',
    templateUrl: './productos.component.html',
    styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

    usuarios=<any>[];

    constructor(private httpClient: HttpClient) { }

    ngOnInit(): void{
        this.httpClient.get("https://jsonplaceholder.typicode.com/users").subscribe(
          response => {
            this.usuarios=response;
            console.log(this.usuarios);
          }
        )
    }
}