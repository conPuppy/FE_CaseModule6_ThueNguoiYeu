import { Account } from "./Account";
import { AccountForChange } from "./AccountForChange";

export class Image1{
    id!:number;
    url!:String;
    account!:AccountForChange;
    statusImg!:number;


    constructor(id: number, url: String, account:AccountForChange, statusImg: number) {
        this.id = id;
        this.url = url;
        this.account = account;
        this.statusImg = statusImg;
    }
}