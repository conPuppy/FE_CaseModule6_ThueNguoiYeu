import { Component, OnInit } from '@angular/core';
import { OrderLover } from 'src/app/model/OrderLover';
import { Provider } from 'src/app/model/Provider';
import { AccountService } from 'src/app/service/account/account.service';
import { ProviderService } from 'src/app/service/provider/provider.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OrderLoverService } from 'src/app/service/Order/order-lover.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-provider-show-bill',
  templateUrl: './provider-show-bill.component.html',
  styleUrls: ['./provider-show-bill.component.css']
})
export class ProviderShowBillComponent implements OnInit{

  listBillOfProvider: OrderLover[] = [];

  usernameAccount!: string;
  
  provider: Provider | any;

  constructor(private providerService: ProviderService, private accountService: AccountService, private orderLoverService: OrderLoverService,  private router: Router) {
  }
    ngOnInit(): void {
    this.findProviderByAccountUsername();
    }

  getBillByIdProvider(idProvider: number) {
    this.providerService.getBillByIdProvider(idProvider).subscribe((data) => {
      this.listBillOfProvider = data;
      console.log(data);
    })
  }

  findProviderByAccountUsername() {
    this.usernameAccount = this.accountService.getAccountToken().username;
    this.providerService.findProviderByAccountUsername(this.usernameAccount).subscribe((data) => {
      this.provider = data;
      console.log(data);
      this.getBillByIdProvider(this.provider.id);
    })
  }

  changeToConfirmed(idOrder: number) {
    this.orderLoverService.changeToConfirmed(idOrder).subscribe(() => {
      this.findProviderByAccountUsername();
      this.router.navigate(["/providerShowBill"])
    })
  }

  changeToRejected(idOrder: number) {
    this.orderLoverService.changeToRejected(idOrder).subscribe(() => {
      this.findProviderByAccountUsername();
    })
  }

  getAllBillOfProviderAndStartOrder(idProvider: number, statusOrder: number) {
    this.providerService.getAllBillOfProviderAndStartOrder(idProvider, statusOrder).subscribe((data) => {
      this.listBillOfProvider = data;
    })
  }
}
