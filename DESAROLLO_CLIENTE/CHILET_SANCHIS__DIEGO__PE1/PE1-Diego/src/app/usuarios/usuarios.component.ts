import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  usuarios = [] as any;
  constructor(private httpClient: HttpClient, private route: ActivatedRoute) { }
  ngOnInit(): void {
    console.log(`Current route: ${this.route}`);
    this.route.queryParams.subscribe(params => {
      console.table(params);
    });
    this.httpClient.get('http://localhost:8000/api/usuarios').subscribe(
      response => {
        this.usuarios = response;
      }
    );
  }

}
