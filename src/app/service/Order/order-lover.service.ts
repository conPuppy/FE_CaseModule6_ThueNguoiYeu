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
    return this.http.get<OrderLover[]>("http://103.57.220.123:8080/orders");
  }

  getOrderByStatus(statusOrder: number): Observable<OrderLover[]> {
    return this.http.get<OrderLover[]>(`http://103.57.220.123:8080/orders/${statusOrder}`);
  }
  createOrder(orderLover: OrderLover):Observable<OrderLover>{
    return this.http.post<OrderLover>('http://103.57.220.123:8080/orders/create',orderLover);
  }

  changeToRejected(idOrder: number): Observable<OrderLover> {
    // @ts-ignore
    return this.http.post<OrderLover>(`http://103.57.220.123:8080/orders/changeToRejected/${idOrder}`)
  }

  changeToConfirmed(idOrder: number): Observable<OrderLover> {
    // @ts-ignore
    return this.http.post<OrderLover>(`http://103.57.220.123:8080/orders/changeToConfirmed/${idOrder}`)
  }

  getAllBillOfAccountById(idAccount: number): Observable<OrderLover[]> {
    return this.http.get<OrderLover[]>(`http://103.57.220.123:8080/user/getOrders/${idAccount}`)
  }

  changeToCompleted(idOrder: number): Observable<OrderLover> {
    // @ts-ignore
    return this.http.post<OrderLover>(`http://103.57.220.123:8080/orders/changeToCompleted/${idOrder}`)
  }

  getAllBillOfAccountByIdAndStartOrder(idAccount: number, statusOrder: number): Observable<OrderLover[]> {
    return this.http.get<OrderLover[]>(`http://103.57.220.123:8080/user/getOrdersByStatus/${idAccount}/${statusOrder}`)
  }
  getAllBillOfProviderIdAndStatus3(providerId:number):Observable<OrderLover[]>{
    return this.http.get<OrderLover[]>(`http://103.57.220.123:8080/orders/getOrdersByStatus3/${providerId}`)
  }
  findOrderById(idOrder: number): Observable<OrderLover> {
    // @ts-ignore
    return this.http.get<OrderLover>(`http://103.57.220.123:8080/orders/m/findOrderById/${idOrder}`)
  }

  findOrderByAccountIdAndProviderId(idAccount:number , idProvider: number): Observable<OrderLover>{
    return this.http.get<OrderLover>("http://103.57.220.123:8080/orders/m/findOrderByAccountId/" + idAccount + "/ProviderId/" + idProvider)
  }

  checkAndChangeStatus(idProvider:number , startDay: String): Observable<any>{
    // @ts-ignore
    return this.http.get<>("http://103.57.220.123:8080/orders/m/checkAndChangeToReject/" + idProvider + "/" + startDay)
  }
}
