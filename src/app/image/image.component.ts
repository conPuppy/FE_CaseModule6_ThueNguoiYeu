import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Router } from '@angular/router';
import { AccountForChange } from '../model/AccountForChange';
import { AccountService } from '../service/account/account.service';
import { ProviderService } from '../service/provider/provider.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit{
  constructor(private router: Router,
              private storage: AngularFireStorage,
              private accountService: AccountService,
              private providerService: ProviderService,
  ) {
  }
  ngOnInit(){
    this.accountService.findById(this.accountService.getAccountToken().id).subscribe(res=>this.account=res)
    this.providerService.findProviderByAccount_Id(this.accountService.getAccountToken().id).subscribe(res => {
      if (res != null) {
        this.statusProvider = res.statusProvider;
      }
    })
  }
  account!: AccountForChange;
  statusProvider!: number;
  selectImage!: any;
  imgSrc: String[]=[]
  logout() {
    localStorage.clear();
    this.router.navigate([''])
  }
  showPreview(event: any) {
    for (let i=0;i<event.target.files.length;i++){
      if (event.target.files && event.target.files[0]) {
        const reader = new FileReader();
        reader.onload = (e: any) => this.imgSrc[i] = e.target.result;
        reader.readAsDataURL(event.target.files[i])
        this.selectImage = event.target.files[i]
      }
    }
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
  goToMyOrder() {
    this.router.navigate(["/userShowBill"])
  }
  goToMyBill() {
    this.router.navigate(["/providerShowBill"])
  }
}
