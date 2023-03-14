import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Account } from 'src/app/model/Account';

import {AccountService} from "../../service/account/account.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  account!: Account;

  constructor(private accountService: AccountService,private router:Router) {
  }


  ngOnInit(): void {
    this.account = this.accountService.getAccountToken();
    console.log(this.account)
  }
  login(){
    this.router.navigate(['/login']);
  }
  register(){
    this.router.navigate(['/register']);
  }
}
