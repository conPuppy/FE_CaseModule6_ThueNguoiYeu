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

  changeToRejected(idOrder: number): Observable<OrderLover> {
    // @ts-ignore
    return this.http.post<OrderLover>(`http://localhost:8080/orders/changeToRejected/${idOrder}`)
  }

  changeToConfirmed(idOrder: number): Observable<OrderLover> {
    // @ts-ignore
    return this.http.post<OrderLover>(`http://localhost:8080/orders/changeToConfirmed/${idOrder}`)
  }
  createOrder(order: any ): Observable<OrderLover>{
    // @ts-ignore
    return this.http.post<OrderLover>("http://localhost:8080/orders/m/oder", order)
  }

  waitingOrder(order: any ): Observable<OrderLover>{
    // @ts-ignore
    return this.http.post<OrderLover>("http://localhost:8080/orders/m/waitingorder", order)
  }
}
