import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boton-producto2',
  templateUrl: './boton-producto2.component.html',
  styleUrls: ['./boton-producto2.component.css']
})
export class BotonProducto2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  
eliminar() {
  alert('hola!');
}

}
