import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

    account: any;

    constructor(private orderLoverService: OrderLoverService, private accountService: AccountService, private router:Router) {
    }
    ngOnInit(): void {
        this.getAllBillOfAccountById();
        this.accountService.findById(this.accountService.getAccountToken().id).subscribe(res => {
            this.account = res})
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

    goToUserShowBill(){
        this.router.navigate(['/userShowBill'])
    }

    logout(){
        localStorage.clear();
        this.router.navigate([''])
    }
    goToProfile(){
        this.router.navigate(['/showProfile'])
    }
    goToEditProfile(){
        this.router.navigate(['/changeInfo'])
    }
}
