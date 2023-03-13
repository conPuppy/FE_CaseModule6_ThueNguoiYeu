import {Component, OnInit} from '@angular/core';
import {AccountForChange} from "../model/AccountForChange";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AccountService} from "../service/account/account.service";
import Swal from "sweetalert2";

@Component({
    selector: 'app-change-appearance',
    templateUrl: './change-appearance.component.html',
    styleUrls: ['./change-appearance.component.css']
})
export class ChangeAppearanceComponent implements OnInit {
    constructor(private accountsService: AccountService) {
    }

    account!: any;
    accountChange!: AccountForChange
    id!: number;
    formChangeAppearance: any;

    ngOnInit() {
        this.formChangeAppearance = new FormGroup({
            id: new FormControl(),
            height: new FormControl('', [Validators.required, Validators.maxLength(3)]),
            weight: new FormControl('', [Validators.required, Validators.maxLength(3)]),
            hobby: new FormControl('', [Validators.required, Validators.maxLength(256)]),
            description: new FormControl('', [Validators.required, Validators.maxLength(256)]),
        })
        this.id = this.accountsService.getAccountToken().id
        this.accountsService.findById(this.id).subscribe((res) => {
            this.account = res
            this.formChangeAppearance.get('id').setValue(res.id)
            this.formChangeAppearance.get('height').setValue(res.height)
            this.formChangeAppearance.get('weight').setValue(res.weight)
            this.formChangeAppearance.get('hobby').setValue(res.hobby)
            this.formChangeAppearance.get('description').setValue(res.description)
        })
    }

    validation_messages = {
        height: [
            {type: 'required', message: 'Please enter your height.'},
            {type: 'maxlength', message: 'Please enter username less than 3 characters.'}
        ],
        weight: [
            {type: 'required', message: 'Please enter your weight.'},
            {type: 'maxlength', message: 'Please enter username less than 3 characters.'}
        ],
        hobby: [
            {type: 'required', message: 'Please enter your hobby.'},
            {
                type: 'maxlength',
                message: 'Please enter username less than 256 characters.'
            }
        ],
        description: [
            {type: 'required', message: 'Please enter your description.'},
            {
                type: 'maxlength',
                message: 'Please enter username less than 256 characters.'
            }
        ]
    };
    changeAppearance(){
        this.accountChange=this.formChangeAppearance.value;
        this.accountChange.gender=this.account.gender;
        this.accountChange.avatar=this.account.avatar;
        this.accountChange.dateOfRegister=this.account.dateOfRegister;
        this.accountChange.username=this.account.username;
        this.accountChange.password=this.account.password;
        this.accountChange.email=this.account.email;
        this.accountChange.logoutTime=this.account.logoutTime;
        this.accountChange.birthday=this.account.birthday;
        this.accountChange.fullName=this.account.fullName;
        this.accountChange.city=this.account.city;
        this.accountChange.country=this.account.country;
        this.accountChange.statusAccount=this.account.statusAccount;
        this.accountChange.statusComment=this.account.statusComment;
        this.accountChange.statusVip=this.account.statusVip;
        this.accountChange.view=this.account.view;
        this.accountChange.wallet=this.account.wallet;
        this.accountsService.changeInfo(this.accountChange).subscribe(res=> Swal.fire('Done!', 'Change Appearance', 'success'))
    }
}
