import { Account } from "./Account";
import { Provider } from "./Provider";

export class OrderLover{
    id: number;
    statusOrder: number;
    orderTime: number;
    total: number;
    dateOfOrder: string;
    startOrder: string;
    endOrder: string;

    account:Account;
    
    provider: Provider;

    constructor(id: number, statusOrder: number, orderTime: number, total: number, dateOfOrder: string, startOrder: string, endOrder: string, account:Account, provider:Provider) {
        this.id = id;
        this.statusOrder = statusOrder;
        this.orderTime = orderTime;
        this.total = total;
        this.dateOfOrder = dateOfOrder;
        this.startOrder = startOrder;
        this.endOrder = endOrder;
        this.account = account;
        this.provider = provider;
    }
}