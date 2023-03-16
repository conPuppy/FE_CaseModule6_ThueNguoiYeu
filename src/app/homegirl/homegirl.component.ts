import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Account } from '../model/Account';
import { Provider } from '../model/Provider';
import { ProvisionProvider } from '../model/ProvisionProvider';
import { AccountService } from '../service/account/account.service';
import { ProviderService } from '../service/provider/provider.service';
import { ProvisionProviderService } from '../service/provisionprovider/provisionprovider.service';

@Component({
  selector: 'app-homegirl',
  templateUrl: './homegirl.component.html',
  styleUrls: ['./homegirl.component.css']
})
export class HomegirlComponent implements OnInit{
  providers: Provider[] = [];
  provider= new Provider;
  provisionproviders: ProvisionProvider[] = [];
  page: number = 1;
  total: number =0;

  account!: Account;

  


  constructor(private accountService: AccountService, private router: Router, private providerService: ProviderService,
              private provisionproviderService: ProvisionProviderService) {
  }
  ngOnInit(): void {
    this.providerService.getBoyProviderTopView().subscribe(data=>{
      this.providers = data;
      this.provisionproviderService.getAllProvisionProvider().subscribe(data=>{
        this.provisionproviders = data;
      })
    });
    this.getTopSellProviderAcc();
    this.accountService.findById(this.accountService.getAccountToken().id).subscribe(res => {
      this.account = res})
  }
  findProviderById(id: number) {
    this.providerService.findProviderById(id).subscribe(data=>{
      console.log(data)
      this.provider = data;
    })
  }
  increaseViewProviderById(id: number) {
    this.providerService.increaseViewProviderById(id).subscribe(data=>{
      this.provider = data;
      this.ngOnInit();
    })
  }
  accounts1: Account[] = [];
  providers1: Provider[] = [];
  provisionproviders1: ProvisionProvider[] = [];

  getTopSellProviderAcc() {
    this.providerService.getProviderTopSell().subscribe(data=>{
      this.providers1 = data;
      this.total = this.providers1.length;
      this.provisionproviderService.getAllProvisionProvider().subscribe(data=>{
        this.provisionproviders1 = data;
      })
    })
  }
  pageChangeEvent(event: number){
    this.page = event;
    this.getTopSellProviderAcc();
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
  goToMyOrder() {
    this.router.navigate(["/userShowBill"])
  }
  
  
}
