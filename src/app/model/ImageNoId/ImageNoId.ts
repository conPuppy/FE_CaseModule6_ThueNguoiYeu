import { AccountForChange } from "../AccountForChange";

export class ImageNoId{
    url!:String;
    account!:AccountForChange;
    statusImg!:number;

    constructor(url: String, account: AccountForChange, statusImg: number) {
        this.url = url;
        this.account = account;
        this.statusImg = statusImg;
    }
}