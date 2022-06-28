import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiCallService {
  constructor(private htpp: HttpClient) {}

  getProducts(): Observable<any> {
    return this.htpp.get('/api/v1_1/categories/92');
  }
}
