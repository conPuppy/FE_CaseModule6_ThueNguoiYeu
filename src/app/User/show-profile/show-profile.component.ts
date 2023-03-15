import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AccountForChange} from 'src/app/model/AccountForChange';
import {AccountService} from 'src/app/service/account/account.service';

@Component({
    selector: 'app-show-profile',
    templateUrl: './show-profile.component.html',
    styleUrls: ['./show-profile.component.css']
})
export class ShowProfileComponent implements OnInit {
    constructor(private router: Router, private accountService: AccountService) {
    }

    account!: AccountForChange;
    roleString: string = '';

    ngOnInit(): void {
        this.accountService.findById(this.accountService.getAccountToken().id).subscribe(res => {
            this.account = res;
            for (let i = 0; i < res.roles.length; i++) {
                this.roleString += res.roles[i].name + ","
            }
        })
    }


    logout() {
        localStorage.clear();
        this.router.navigate(['/login'])
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
}
