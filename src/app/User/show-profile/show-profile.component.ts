import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Account } from 'src/app/model/Account';
import { AccountService } from 'src/app/service/account/account.service';

@Component({
  selector: 'app-show-profile',
  templateUrl: './show-profile.component.html',
  styleUrls: ['./show-profile.component.css']
})
export class ShowProfileComponent implements OnInit{
  constructor(private router:Router,private accountService:AccountService) {
  }
  user!:Account;


  ngOnInit(): void {
        this.accountService.findById(this.accountService.getAccountToken().id).subscribe(res=>this.user=res)
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
  goToProvider(){
    this.router.navigate(['/supplier'])
  }
}
