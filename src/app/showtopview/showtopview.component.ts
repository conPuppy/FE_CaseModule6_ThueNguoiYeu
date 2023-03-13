import {Component, OnInit} from '@angular/core';
import {Account} from "../model/Account";
import {Provider} from "../model/Provider";
import {ProvisionProvider} from "../model/ProvisionProvider";
import {AccountService} from "../service/account/account.service";
import {Router} from "@angular/router";
import {ProviderService} from "../service/provider/provider.service";
import {ProvisionProviderService} from "../service/provisionprovider/provisionprovider.service";

@Component({
  selector: 'app-showtopview',
  templateUrl: './showtopview.component.html',
  styleUrls: ['./showtopview.component.css']
})
export class ShowtopviewComponent implements OnInit{
  accounts: Account[] = [];
  providers: Provider[] = [];
  provider!: Provider;
  provisionproviders: ProvisionProvider[] = [];
  page: number = 1;
  total: number =0;


  constructor(private accountService: AccountService, private router: Router, private providerService: ProviderService,
              private provisionproviderService: ProvisionProviderService) {
  }
  ngOnInit(): void {
    this.providerService.getProviderTopView().subscribe(data=>{
      this.providers = data;
      this.provisionproviderService.getAllProvisionProvider().subscribe(data=>{
        this.provisionproviders = data;
      })
    })
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

}
