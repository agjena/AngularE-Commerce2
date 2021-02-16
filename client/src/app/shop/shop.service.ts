import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPagination } from '../shared/models/IPagination';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  baseUrl = 'https://localhost:44378/api/';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<IPagination>{
    return this.http.get<IPagination>(this.baseUrl + 'products');
  }
}
