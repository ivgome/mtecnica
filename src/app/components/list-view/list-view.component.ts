import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../../api-call.service';
import { Product, products } from '../../interfaces/Product';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css'],
})
export class ListViewComponent implements OnInit {
  // productList: any;
  products = products;
  productList: Product[] = [];
  showModal: boolean = false;
  productImg!: string;

  constructor(private apiCall: ApiCallService) {}

  ngOnInit() {
    this.apiCall.getProducts().subscribe((data) => {
      this.productList = data;
      console.log('PRODUCTOS ->', this.productList);
    });
  }

  show(productImg: string) {
    this.showModal = true;
    this.productImg = productImg;
  }

  hide() {
    this.showModal = false;
  }
}
