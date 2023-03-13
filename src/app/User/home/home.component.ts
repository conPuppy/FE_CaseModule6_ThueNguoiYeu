import {Component, OnInit} from '@angular/core';
import { Account } from 'src/app/model/Account';

import {AccountService} from "../../service/account/account.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  account!: Account;

  constructor(private accountService: AccountService) {
  }


  ngOnInit(): void {
    this.account = this.accountService.getAccountToken();
    console.log(this.account)
  }

}
