
import {Injectable} from '@angular/core';
import {Account} from "../../model/Account";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Provider} from "../../model/Provider";
import { OrderLover } from 'src/app/model/OrderLover';

@Injectable({
    providedIn: 'root'
})
export class ProviderService {
    providers: Provider[] = []
    private url = "http://localhost:8080/providers";

    constructor(private http: HttpClient) {
    }

    getProviderTopView(): Observable<Provider[]> {
        return this.http.get<Provider[]>(this.url + "/top/view");
    }
    getBoyProviderTopView(): Observable<Provider[]> {
        return this.http.get<Provider[]>(this.url+ "/top/view/boy");
    }
    getGirlProviderTopView(): Observable<Provider[]> {
        return this.http.get<Provider[]>(this.url+ "/top/view/girl");
    }

    findProviderById(id: number): Observable<Provider> {
        return this.http.get<Provider>(this.url + "/viewer/" + id);
    }
    increaseViewProviderById(id: number): Observable<Provider> {
        return this.http.post<Provider>(this.url+"/view/"+id,this.findProviderById(id));
    }

    getAllProviderAcc(page: number): Observable<Provider[]> {
        return this.http.get<Provider[]>(this.url + "?page" + page);
    }

    getBillByIdProvider(idProvider: number): Observable<OrderLover[]> {
        return this.http.get<OrderLover[]>(this.url + "/orders/" + idProvider);
    }

    findProviderByAccountUsername(accountUsername: string): Observable<Provider> {
        return this.http.get<Provider>(this.url + "/" + accountUsername);
    }
}
