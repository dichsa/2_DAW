import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  @Input() codigoProducto=" ";
  @Input() nombre = "";
  @Input() descripcion = "";
  @Input() precio = "";
  @Input() stock = "";
}
