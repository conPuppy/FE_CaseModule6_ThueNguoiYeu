

import {Injectable,OnInit} from '@angular/core';
import {Account} from "../../model/Account";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {AccountCreate} from "../../model/AccountCreate";
import {AccountToken} from "../../model/AccountToken";
import { AccountForChange } from 'src/app/model/AccountForChange';

@Injectable({
    providedIn: 'root'
})
export class AccountService implements OnInit {
    accounts: Account[] = [];
    private url = 'http://103.57.220.123:8080/admin/accounts';

    constructor(private http: HttpClient) {
    }

    ngOnInit(): void {
    }

    getAllProvider(): Observable<Account[]> {
        return this.http.get<Account[]>("http://103.57.220.123:8080/accounts");
    }

    createAccount(accountCreate: AccountCreate): Observable<Account> {
        return this.http.post<Account>('http://103.57.220.123:8080/register', accountCreate)
    }

    findAccountByUsername(username: String): Observable<any> {
        return this.http.get<any>(`http://103.57.220.123:8080/register/findAccountByUsername/${username}`)
    }

    findAccountByEmail(email: String): Observable<any> {
        return this.http.get<any>(`http://103.57.220.123:8080/register/findAccountByEmail/${email}`)
    }
    findAccountByPhoneNumber(phoneNumber: String): Observable<any> {
            return this.http.get<any>(`http://103.57.220.123:8080/register/findAccountByPhoneNumber/${phoneNumber}`)
    }
    forgotPass(account:Account):Observable<any>{
        return this.http.post<any>('http://103.57.220.123:8080/register/forgetPass',account)
    }
    getAllAccount(page: number): Observable<any> {
        return this.http.get<any>(this.url + '?page=' + page);
    }

    blockAccount(id: number): Observable<any> {
        // @ts-ignore
        return this.http.post<any>(`http://103.57.220.123:8080/admin/accounts/block/${id}`);
    }

    search(stringSearch: String): Observable<any> {
        return this.http.get<any>(`http://103.57.220.123:8080/admin/search/${stringSearch}`)
    }


    searchProvider(stringSearch: String): Observable<any> {
        return this.http.get<any>(`http://103.57.220.123:8080/user/searchProvider/${stringSearch}`)
    }


    findById(id: number): Observable<any> {
        return this.http.get<any>(`http://103.57.220.123:8080/admin/accounts/${id}`)
    }

    upVip(id: number): Observable<any> {
        // @ts-ignore
        return this.http.post <any>(`http://103.57.220.123:8080/admin/accounts/vip/${id}`);
    }

    login(account: any): Observable<AccountToken> {
        return this.http.post<AccountToken>("http://103.57.220.123:8080/login", account)
    }

    changeInfo(account: AccountForChange): Observable<AccountForChange> {
        return this.http.post<AccountForChange>('http://103.57.220.123:8080/user/editProfile', account)
    }
    verify(code: String): Observable<boolean> {
        return this.http.get<boolean>(`http://103.57.220.123:8080/verify/${code}`)
    }

    setToken(token: string) {
        localStorage.setItem("token", token)
    }

    getToken() {
        return localStorage.getItem("token")
    }


    setAccountToken(accountToken: AccountToken) {
        localStorage.setItem("accountToken", JSON.stringify(accountToken))
    }

    getAccountToken() {
        // @ts-ignore - nghĩa là không su dụng cú pháp của TS
        return JSON.parse(localStorage.getItem("accountToken"))
    }
}
