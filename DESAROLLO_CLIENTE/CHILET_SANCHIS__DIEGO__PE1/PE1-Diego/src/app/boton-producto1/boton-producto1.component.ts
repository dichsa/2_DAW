import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boton-producto1',
  templateUrl: './boton-producto1.component.html',
  styleUrls: ['./boton-producto1.component.css']
})
export class BotonProducto1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  clickAddTodo() {
  alert('hola!');
}
}
