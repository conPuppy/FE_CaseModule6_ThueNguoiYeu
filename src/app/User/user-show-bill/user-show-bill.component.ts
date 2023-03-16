import { Component, OnInit } from '@angular/core';
import { OrderLover } from 'src/app/model/OrderLover';
import { AccountService } from 'src/app/service/account/account.service';
import { OrderLoverService } from 'src/app/service/Order/order-lover.service';

@Component({
  selector: 'app-user-show-bill',
  templateUrl: './user-show-bill.component.html',
  styleUrls: ['./user-show-bill.component.css']
})
export class UserShowBillComponent implements OnInit{

    listBillOfAccount: OrderLover[] = [];

    idAccount: number = -1;

    constructor(private orderLoverService: OrderLoverService, private accountService: AccountService) {
    }
    ngOnInit(): void {
        this.getAllBillOfAccountById();
    }

    getAllBillOfAccountById() {
        this.idAccount = this.accountService.getAccountToken().id;
        this.orderLoverService.getAllBillOfAccountById(this.idAccount).subscribe((data) => {
            this.listBillOfAccount = data;
            console.log(data);
        })
    }
    changeToCompleted(idOrder: number) {
        this.orderLoverService.changeToCompleted(idOrder).subscribe(() => {
            this.getAllBillOfAccountById();
        })
    }

    getAllBillOfAccountByIdAndStartOrder(idAccount: number, statusOrder: number) {
        this.orderLoverService.getAllBillOfAccountByIdAndStartOrder(idAccount,statusOrder).subscribe((data) => {
            this.listBillOfAccount = data;
        })
    }
}
