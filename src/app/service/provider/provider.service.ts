
import {Injectable} from '@angular/core';
import {Account} from "../../model/Account";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Provider} from "../../model/Provider";

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

    findProviderById(id: number): Observable<Provider> {
        return this.http.get<Provider>(this.url + "/" + id);
    }
    increaseViewProviderById(id: number): Observable<Provider> {
        return this.http.post<Provider>(this.url+"/view/"+id,this.findProviderById(id));
    }

    getAllProviderAcc(page: number): Observable<Provider[]> {
        return this.http.get<Provider[]>(this.url + "?page" + page);
    }
}
