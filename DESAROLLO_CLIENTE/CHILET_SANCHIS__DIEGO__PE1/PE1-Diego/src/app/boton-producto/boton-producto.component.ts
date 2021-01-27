import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boton-producto',
  templateUrl: './boton-producto.component.html',
  styleUrls: ['./boton-producto.component.css']
})
export class BotonProductoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  
clickAddTodo() {
  alert('hola!');
}

}
