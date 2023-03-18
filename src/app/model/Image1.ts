import { Account } from "./Account";

export class Image{
    id!:number;
    url!:String;
    account!:Account;
    statusImg!:number;

    constructor(id: number, url: String, account:Account, statusImg: number) {
        this.id = id;
        this.url = url;
        this.account = account;
        this.statusImg = statusImg;
    }
}