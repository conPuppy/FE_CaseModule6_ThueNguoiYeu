import {Component, OnInit} from '@angular/core';
import {AccountService} from "../../service/account/account.service";
import {FormControl, FormGroup} from "@angular/forms";
import { Account } from 'src/app/model/Account';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.css']
})
export class HomeAdminComponent implements OnInit{

  accounts: Account[] = []

  formSearch: FormGroup = new FormGroup({
    search: new FormControl()
  });

  stringSearch: any;
  account: any;

  p: number = 1;
  total: number = 0;

  constructor(private accountService: AccountService) {
  }
  ngOnInit(): void {
    this.getAllAccount();
  }

  getAllAccount() {
    this.accountService.getAllAccount(this.p).subscribe((response: any) => {
      this.accounts = response;
      this.total = response.total;
    })
  }

  pageChangeEvent(event: number){
    this.p = event;
    this.getAllAccount();
  }

  blockAccount(id: number) {
    this.accountService.blockAccount(id).subscribe(() =>{
      this.getAllAccount();
    })
  }

  upVip(id: number) {
    this.accountService.upVip(id).subscribe(() => {
      this.getAllAccount();
    })
  }


  search() {
    this.stringSearch = this.formSearch.controls["search"].value
    if (this.stringSearch != "") {
      this.accountService.search(this.stringSearch).subscribe((data) => {
        this.accounts = data;
      })
    } else {
      this.getAllAccount();
    }
  }


  findAccountById(id: number) {
    this.accountService.findById(id).subscribe((data) => {
      this.account = data;
    })
  }
}
