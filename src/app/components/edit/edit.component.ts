import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiCallService } from 'src/app/api-call.service';
import { Product, ProductsApi } from 'src/app/interfaces/ProductsResponse';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
})
export class EditComponent implements OnInit {
  product: any;
  productList: any;
  constructor(private route: ActivatedRoute, private apiCall: ApiCallService) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = routeParams.get('productId');
    this.apiCall.getProducts().subscribe((data: ProductsApi) => {
      if (data.categories === undefined) {
        this.product = null;
        return;
      }
      this.productList = data.categories[1].products;
      this.productList.forEach((element: any) => {
        if (element.id === productIdFromRoute) {
          this.product = element;
        }
      });
    });
  }

  editProduct() {
    alert('Producto Editado');
  }
}
