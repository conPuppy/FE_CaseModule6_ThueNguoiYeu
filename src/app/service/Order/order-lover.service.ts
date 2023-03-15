import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { OrderLover } from 'src/app/model/OrderLover';
@Injectable({
  providedIn: 'root'
})
export class OrderLoverService {

  constructor(private http: HttpClient) {
  }

  
  getAllOrder(): Observable<OrderLover[]> {
    return this.http.get<OrderLover[]>("http://localhost:8080/orders")
  }

  getOrderByStatus(statusOrder: number): Observable<OrderLover[]> {
    return this.http.get<OrderLover[]>(`http://localhost:8080/orders/${statusOrder}`)
  }
}
