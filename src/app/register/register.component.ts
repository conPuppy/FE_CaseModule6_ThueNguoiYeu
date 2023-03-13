import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import Swal from 'sweetalert2';
import {AccountCreate} from "../model/AccountCreate";
import {AccountService} from "../service/account/account.service";

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    constructor(private accountService: AccountService, private router: Router) {
    }

    formRegister!: FormGroup;
    public checkDuplicateUsername: boolean = false;
    public checkDuplicateEmail: boolean = false;
    public checkConfirmPassword: boolean = false;
    today!: any

    ngOnInit() {
        this.today = new Date().toISOString().split("T")[0];
        this.formRegister = new FormGroup({
            username: new FormControl('', [Validators.required, Validators.maxLength(40)]),
            email: new FormControl('', [Validators.required, Validators.pattern('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$')]),
            password: new FormControl('', [Validators.required, Validators.maxLength(16), Validators.minLength(6)]),
            confirmPassword: new FormControl('', [Validators.required, Validators.maxLength(16), Validators.minLength(6)]),
            birthday: new FormControl('', [Validators.required, this.checkDateOfBirth]),
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
        ],
        password: [
            {type: 'required', message: 'Please enter a password.'},
            {type: 'maxlength', message: 'Please enter password less than 16 characters.'},
            {type: 'minlength', message: 'Please enter password more than 6 characters.'},
        ],
        confirmPassword: [
            {type: 'required', message: 'Please re-enter your password.'},
            {type: 'maxlength', message: 'Please enter password less than 16 characters.'},
            {type: 'minlength', message: 'Please enter password more than 6 characters.'},
        ]
    };

    public funcCheckConfirmPassword(): boolean {
        if (this.formRegister.get("password")?.value != this.formRegister.get("confirmPassword")?.value) {
            return this.checkConfirmPassword = true;
        } else {
            return this.checkConfirmPassword = false;
        }
    }

    checkDateOfBirth(control: AbstractControl) {
        const dateOfBirth = new Date(control.value);
        if (new Date().getFullYear() - dateOfBirth.getFullYear() < 18) {
            return {checkAge: true};
        }
        return null;
    }

    funcCheckDuplicateUsername(username: String) {
        this.accountService.findAccountByUsername(username).subscribe(res => {
            if (res != null) {
                this.checkDuplicateUsername = true;
            } else {
                this.checkDuplicateUsername = false
            }
        })
    }

    funcCheckDuplicateEmail(email: String) {
        this.accountService.findAccountByEmail(email).subscribe(res => {
            if (res != null) {
                this.checkDuplicateEmail = true;
            } else {
                this.checkDuplicateEmail = false
            }
        })
    }

    createAccount() {
        // @ts-ignore
        let accountCreate = new AccountCreate(this.formRegister.get("username").value, this.formRegister.get("email").value, this.formRegister.get("password").value, this.formRegister.get("birthday").value)
        this.accountService.createAccount(accountCreate).subscribe(
            res => {
                Swal.fire('Done!', 'Congratulations on your successful registration', 'success');
                this.router.navigate(["/login"]);
            }
        )

    }


}
