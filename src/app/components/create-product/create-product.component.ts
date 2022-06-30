import { Component } from '@angular/core';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
})
export class CreateProductComponent {
  createProduct() {
    alert('Producto Creado');
  }
}
