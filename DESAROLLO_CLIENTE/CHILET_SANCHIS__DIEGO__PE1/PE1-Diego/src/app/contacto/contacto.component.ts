import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})

   export class ContactoComponent implements OnInit {

    contacto = <any>[];
    getId: any;
  
    constructor(private httpClient: HttpClient, private activatedRoute: ActivatedRoute ) { 
      this.getId = this.activatedRoute.snapshot.paramMap.get('id');
    }
      
    ngOnInit(): void {
      this.httpClient.get('http://localhost:8000/api/contactos').subscribe(
        response => {
          this.contacto = response;
        });
    }
  
  
    public detalle(contactos: any) {
      const id =contactos.id;
      const rute = 'http://localhost:8000/api/contacto/' + id;
  
      this.httpClient.get(rute).subscribe(
        response => {
          this.contacto = response;
        }
      );
  
    }
  }
