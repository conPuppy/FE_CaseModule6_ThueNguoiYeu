import {Component, OnInit} from '@angular/core';
import {AccountService} from "../service/account/account.service";
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {AccountForChange} from "../model/AccountForChange";
import Swal from "sweetalert2";

@Component({
    selector: 'app-change-info',
    templateUrl: './change-info.component.html',
    styleUrls: ['./change-info.component.css']
})
export class ChangeInfoComponent implements OnInit {
    constructor(private accountService: AccountService) {
    }
    public checkDuplicateEmail: boolean = false;
    public checkDuplicateUsername: boolean = false;

    account!: any;
    accountChange!:AccountForChange
    id!: number;
    formChangeInfo:any;
    ngOnInit() {
        this.formChangeInfo= new FormGroup({
            id: new FormControl(),
            fullName: new FormControl(),
            username: new FormControl('',[Validators.required, Validators.maxLength(40)]),
            email: new FormControl('', [Validators.required, Validators.pattern('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$')]),
            birthday: new FormControl('', [Validators.required, this.checkDateOfBirth]),
            city: new FormControl(),
            country: new FormControl(),
            genderObj: new FormGroup({
                gender: new FormControl()
            }),
        })

        this.id = this.accountService.getAccountToken().id
        this.accountService.findById(this.id).subscribe((res) => {
            this.account=res
            this.formChangeInfo.get('id').setValue(res.id)
            this.formChangeInfo.get('fullName').setValue(res.fullName)
            this.formChangeInfo.get('username').setValue(res.username)
            this.formChangeInfo.get('email').setValue(res.email)
            this.formChangeInfo.get('birthday').setValue(res.birthday)
            this.formChangeInfo.get('city').setValue(res.city)
            this.formChangeInfo.get('country').setValue(res.country)
            this.formChangeInfo.get('genderObj').get('gender').setValue(res.gender)
        })
    }
    validation_messages = {
        username: [
            {type: 'required', message: 'Please enter username.'},
            {type: 'maxlength', message: 'Please enter username less than 40 characters.'}
        ],
        birthday: [
            {type: 'required', message: 'Please select date of birth.'},
            {type: 'checkAge', message: 'Age must be 18 years old.'}
        ],
        email: [
            {type: 'required', message: 'Please enter your email.'},
            {
                type: 'pattern',
                message: 'Please enter your email in the format abc@xyz.jqk!'
            }
        ]
    };
    funcCheckDuplicateUsername(username: String) {
        this.accountService.findAccountByUsername(username).subscribe(res => {
            if (res != null) {
                this.checkDuplicateUsername = true;
            }else {
                this.checkDuplicateUsername = false
            }
        })
    }
    funcCheckDuplicateEmail(email: String) {
        this.accountService.findAccountByEmail(email).subscribe(res => {
            if (res != null) {
                this.checkDuplicateEmail = true;
            }else {
                this.checkDuplicateEmail = false
            }
        })
    }
    checkDateOfBirth(control: AbstractControl) {
        const dateOfBirth = new Date(control.value);
        if (new Date().getFullYear() - dateOfBirth.getFullYear() < 18) {
            return {checkAge: true};
        }
        return null;
    }
    changeInfo(){
        this.accountChange=this.formChangeInfo.value;
        this.accountChange.gender=this.formChangeInfo.value.genderObj.gender;
        this.accountChange.avatar=this.account.avatar;
        this.accountChange.dateOfRegister=this.account.dateOfRegister;
        this.accountChange.description=this.account.description;
        this.accountChange.height=this.account.height;
        this.accountChange.weight=this.account.weight;
        this.accountChange.hobby=this.account.hobby;
        this.accountChange.logoutTime=this.account.logoutTime;
        this.accountChange.password=this.account.password;
        this.accountChange.statusAccount=this.account.statusAccount;
        this.accountChange.statusComment=this.account.statusComment;
        this.accountChange.statusVip=this.account.statusVip;
        this.accountChange.view=this.account.view;
        this.accountChange.wallet=this.account.wallet;
        this.accountService.changeInfo(this.accountChange).subscribe(res=> Swal.fire('Done!', 'Change Info', 'success'))
    }

    requestVip(){
        this.account.statusVip=3
        console.log(this.account)
        this.accountService.changeInfo(this.account).subscribe((res)=>{
            this.accountService.findById(this.accountService.getAccountToken().id).subscribe((data)=>{
                this.account=res;
                Swal.fire('Done!', 'Request sent successfully!', 'success')
            })
        })
    }


















}
