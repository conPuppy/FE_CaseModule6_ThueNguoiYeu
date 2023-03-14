import { Account } from "./Account";

export class Image{
    url!:String;
    account!:Account

    constructor(url: String, account:Account) {
        this.url = url;
        this.account = account;
    }
}