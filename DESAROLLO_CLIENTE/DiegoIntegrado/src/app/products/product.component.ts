import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  @Input() codigoProducto="102931";
  @Input() nombre = "Nike Air VaporMax 2020 FK";
  @Input() descripcion = "Diseñadas para correr y adoptadas por las calles.";
  @Input() precio = "225€";
  @Input() stock = "100";
  @Input() img="https://picsum.photos/seed/picsum/200/300";
}
