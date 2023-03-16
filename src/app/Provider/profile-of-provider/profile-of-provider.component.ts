import { Component, ElementRef, ViewChild } from '@angular/core';
import {FormControl, FormGroup } from '@angular/forms';
import {ActivatedRoute, Router } from '@angular/router';
import { AccountForChange } from 'src/app/model/AccountForChange';
import { Provider } from 'src/app/model/Provider';
import { ProvisionProvider } from 'src/app/model/ProvisionProvider';
import { AccountService } from 'src/app/service/account/account.service';
import { OrderLoverService } from 'src/app/service/Order/order-lover.service';
import { ProviderService } from 'src/app/service/provider/provider.service';
import { ProvisionProviderService } from 'src/app/service/provisionprovider/provisionprovider.service';

@Component({
  selector: 'app-profile-of-provider',
  templateUrl: './profile-of-provider.component.html',
  styleUrls: ['./profile-of-provider.component.css']
})
export class ProfileOfProviderComponent {
  @ViewChild('price') price: ElementRef | undefined;
  @ViewChild('orderTime') orderTime: ElementRef | undefined;
  username: any
  id: any
  provider!: Provider;
  listProvisionProvider: ProvisionProvider[] = []
  account!: AccountForChange;

  constructor( private accountService: AccountService ,private oderService: OrderLoverService,private providerService: ProviderService, private router: Router, private route: ActivatedRoute, private provisionProvider: ProvisionProviderService) {
  }

  orderForm = new FormGroup({
    provider: new FormControl(),
    account: new FormControl(),
    startDay: new FormControl(),
    orderTime: new FormControl(),
    total: new FormControl()
  })

  ngOnInit(): void {

    this.username = this.route.snapshot.paramMap.get('nickName');
    this.id = this.route.snapshot.paramMap.get('id');
    this.accountService.findById(this.accountService.getAccountToken().id).subscribe((res)=>{
      this.account = res
      this.orderForm.controls.account.setValue(this.account)
    })
    
    this.providerService.getProfife(this.username).subscribe((data) => {
      this.provider = data;
      console.log(data)
      this.orderForm.controls.provider.setValue(this.provider)
      this.provisionProvider.getAllProvisionProviderById(this.id).subscribe((data) => {
        // console.log(data)
        this.listProvisionProvider = data;
      })
    })


  }

  myTotal() {
    let order = this.orderForm.value;
    this.orderForm.controls.total.setValue(order.orderTime * this.provider.price);

  }
  order(){
    console.log(this.orderForm.get("startDay")?.value)
    this.oderService.createOrder(this.orderForm.value).subscribe((data)=>{
    })
    console.log(this.orderForm.value)
  }
  waitingOder(){
    this.oderService.waitingOrder(this.orderForm.value).subscribe((data)=>{
    })
  }
}
