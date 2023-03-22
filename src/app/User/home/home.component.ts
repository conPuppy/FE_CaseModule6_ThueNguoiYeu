import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Account } from 'src/app/model/Account';
import { Provider } from 'src/app/model/Provider';
import { ProvisionProvider } from 'src/app/model/ProvisionProvider';
import { ProviderService } from 'src/app/service/provider/provider.service';
import { ProvisionProviderService } from 'src/app/service/provisionprovider/provisionprovider.service';
import Swal from 'sweetalert2';

import {AccountService} from "../../service/account/account.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  accounts: Account[] = [];
  providers: Provider[] = [];
  provisionproviders: ProvisionProvider[] = [];
  page: number = 1;
  total: number =0;
  token!: any;

  providersView: Provider[] = [];
  provider = new Provider;
  provisionprovidersView: ProvisionProvider[] = [];

  constructor(private accountService: AccountService,
              private router: Router,
              private providerService: ProviderService,
              private provisionproviderService: ProvisionProviderService) {
  }
  
  ngOnInit(): void {
    this.getProviderAcc();
    this.getTopViewProviders();
  }
  getTopViewProviders() {
    this.providerService.getProviderTopView().subscribe(data => {
      this.providersView = data;
      this.provisionproviderService.getAllProvisionProvider().subscribe(data => {
        this.provisionprovidersView = data;
      })
    })
  }
  getProviderAcc() {
    this.providerService.getNewProviders().subscribe(data=>{
      this.providers = data;
      this.total = this.providers.length;
      this.provisionproviderService.getAllProvisionProvider().subscribe(data=>{
        this.provisionproviders = data;
        console.log(data);
      })
    })
  }
  pageChangeEvent(event: number){
    this.page = event;
    this.getProviderAcc();
  }
  login(){
    this.router.navigate(['/login']);
  }
  register(){
    this.router.navigate(['/register']);
  }


  checkLogin() {
    this.token = this.accountService.getToken();
    if (this.token != "") {
      Swal.fire(
          ' ',
          '<h2 style="color: red; font-size: 32px">You are not logged in, please login to view more information</h2>',
          'error'
      )
    }
  }
}
