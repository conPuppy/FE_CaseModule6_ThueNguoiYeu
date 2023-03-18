import {Component, OnInit } from "@angular/core";
import { AngularFireStorage } from "@angular/fire/compat/storage";
import { Router } from "@angular/router";
import { AccountForChange } from "../model/AccountForChange";
import { Provider } from "../model/Provider";
import { Provision } from "../model/Provision";
import { ProvisionProvider } from "../model/ProvisionProvider";
import { AccountService } from "../service/account/account.service";
import { ProviderService } from "../service/provider/provider.service";
import { ProvisionService } from "../service/provision/provision.service";
import { ProvisionProviderService } from "../service/provisionprovider/provisionprovider.service";


@Component({
    selector: 'app-create-provider',
    templateUrl: './create-provider.component.html',
    styleUrls: ['./create-provider.component.css']
})
export class CreateProviderComponent implements OnInit {
    account!: AccountForChange;
    statusProvider!: number;
    provider!: Provider;
    allServicesOfProvider!: ProvisionProvider[];
    constructor(private router: Router,
                private storage: AngularFireStorage,
                private accountService: AccountService,
                private providerService: ProviderService,
                private provisionProviderService: ProvisionProviderService,
                private provisionService: ProvisionService,
    ) {
    }

    ngOnInit() {
        this.providerService.findProviderByAccount_Id(this.accountService.getAccountToken().id).subscribe(res => {
            if (res != null) {
                console.log(res)
                this.provider=res
                this.statusProvider = res.statusProvider;
            }
        })
        this.getAllService()

    }
    changePrice(){
        alert('vao')
    }
    changeFreeAndExtend(id:number){
        this.provisionProviderService.findById(id).subscribe(res=>{
            if(res.statusServiceProvider==1){
                res.statusServiceProvider=2
            }else {
                res.statusServiceProvider=1
            }
            this.provisionProviderService.saveProvisionProvider(res).subscribe(res=>this.getAllService());
        });
    }

    getAllService() {
        this.providerService.findProviderByAccount_Id(this.accountService.getAccountToken().id).subscribe(res=>{
            this.provisionProviderService.findProvisionProviderByProviderId(res.id).subscribe(res1=>this.allServicesOfProvider=res1);
        })

    }

    logout() {
        localStorage.clear();
        this.router.navigate([''])
    }

    goToProfile() {
        this.router.navigate(['/showProfile'])
    }

    goToEditProfile() {
        this.router.navigate(['/changeInfo'])
    }

    goToProvider() {
        this.router.navigate(['/supplier'])
    }
    goToEditProvider(){
        this.router.navigate(['/profileProvider'])
    }
}
