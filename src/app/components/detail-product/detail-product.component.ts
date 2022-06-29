import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiCallService } from 'src/app/api-call.service';
import { ProductsApi } from 'src/app/interfaces/ProductsResponse';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styles: ['a {text-decoration:none}'],
})
export class DetailProductComponent implements OnInit {
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
        if (element.id !== productIdFromRoute) {
          return;
        }
        this.product = element;
      });
    });
  }
}
