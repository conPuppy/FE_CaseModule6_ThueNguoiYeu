import { Account } from "./Account";
import { Provider } from "./Provider";

export class Comment{
    id!:number;
    comment !: string;
    rate !: number;
    account !: Account
    provider !: Provider
}