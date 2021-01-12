import { Component, OnInit } from '@angular/core';
import { Product } from '../../domain/product';
import { ProductService } from '../../service/productservice';

@Component({
  selector: 'app-informes',
  templateUrl: '../tablebasicdemo.html',
  styleUrls: ['./informes.component.css'],
})
export class TableBasicDemo implements OnInit {

  productos: Product[];

  constructor(private productService: ProductService) { }

  ngOnInit() {
      this.productService.getProductsSmall().then(data => this.productos = data);
  }
}