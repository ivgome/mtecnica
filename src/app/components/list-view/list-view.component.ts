import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../../api-call.service';
import { products } from '../../interfaces/Product';
import { Category } from '../../interfaces/ProductsResponse';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css'],
})
export class ListViewComponent implements OnInit {
  products = products;
  productList: any;
  showModal: boolean = false;
  productImg!: string;

  constructor(private apiCall: ApiCallService) {}

  ngOnInit() {
    this.apiCall.getProducts().subscribe((data) => {
      this.productList = data;
      console.log('PRODUCTOS ->', this.productList);
    });
  }

  onShowModal(productImg: string) {
    this.showModal = true;
    this.productImg = productImg;
  }

  onHideModal() {
    this.showModal = false;
  }
}
