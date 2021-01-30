import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  usuarios = <any>[];

  constructor(private httpClient: HttpClient) { 
   }

  ngOnInit(): void {

    this.httpClient.get('http://localhost:8000/api/users').subscribe(
      response => { this.usuarios = response;
    console.log(this.usuarios);});
      }

    public removeusuario (usuario:any) {

      const id = usuario.id;
      const ruta= 'http://localhost:8000/api/user/'+id;

      this.httpClient.delete(ruta).subscribe(
        response => { 
          this.usuarios = response;
      });  
    }
  }
