import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router } from '@angular/router';
import { AccountService } from '../service/account/account.service';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.css']
})
export class VerifyComponent implements OnInit{
  check!:boolean;
  code:string=this.route.snapshot.params['id'];
  constructor(private router:Router,
              private route: ActivatedRoute,
              private accountService: AccountService) {
  }
  ngOnInit(){

  }
  verify(){
    this.accountService.verify(this.code).subscribe(res=>{
      if(res){
        this.check=true;
      }else {
        this.check=false;
      }
    })
  }
  goToLogin(){
    this.router.navigate(['/login'])
  }
}
