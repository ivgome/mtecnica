import { Component, OnInit } from '@angular/core';
import { ProductsApi } from 'src/app/interfaces/ProductsResponse';
import { ApiCallService } from '../../api-call.service';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css'],
})
export class ListViewComponent implements OnInit {
  productList: any;
  showModal: boolean = false;
  productImg!: string;

  constructor(private apiCall: ApiCallService) {}

  ngOnInit() {
    this.apiCall.getProducts().subscribe((data: ProductsApi) => {
      if (data.categories !== undefined)
        this.productList = data.categories[1].products;
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
