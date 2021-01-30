import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-detalle-usuarios',
  templateUrl: './detalle-usuarios.component.html',
  styleUrls: ['./detalle-usuarios.component.css']
})
export class DetalleUsuariosComponent implements OnInit {
  
    usuarios = <any>[];
    getId: any;
  
    constructor(private httpClient: HttpClient, private activatedRoute: ActivatedRoute ) { 
      this.getId = this.activatedRoute.snapshot.paramMap.get('id');
     }
  
     ngOnInit(): void {
      this.httpClient.get('http://localhost:8000/api/users').subscribe(
        response => {
          this.usuarios = response;
        });
    }
  
  
    public detalle(usuarios: any) {
      const id = usuarios.id;
      const rute = 'http://localhost:8000/api/user/' + id;
  
      this.httpClient.get(rute).subscribe(
        response => {
          this.usuarios = response;
        }
      );
  
    }
  }
