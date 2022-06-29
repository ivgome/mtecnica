import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/interfaces/ProductsResponse';

@Injectable({
  providedIn: 'root',
})
export class ApiCallService {
  constructor(private htpp: HttpClient) {}

  getProducts(): Observable<any> {
    return this.htpp.get<Product>('/api/v1_1/categories/92');
  }
}
