import {Component, OnInit} from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import {Router} from '@angular/router';
import { finalize } from 'rxjs';
import Swal from 'sweetalert2';
import { AccountForChange } from '../model/AccountForChange';
import { AccountService } from '../service/account/account.service';

@Component({
    selector: 'app-change-avatar',
    templateUrl: './change-avatar.component.html',
    styleUrls: ['./change-avatar.component.css']
})
export class ChangeAvatarComponent implements OnInit {
    account!:AccountForChange;
    selectImage!: any;
    imgSrc!:String
    constructor(private router: Router,private storage:AngularFireStorage,private accountService:AccountService) {
    }
    ngOnInit() {
        this.accountService.findById(this.accountService.getAccountToken().id).subscribe((res)=>{this.account=res;
        this.imgSrc=this.account.avatar})
    }
    summit() {
        if (this.selectImage !== null) {
            const filePath=`${this.selectImage.name.split('.').slice('0,-1').join('.')}_${new Date().getTime()}`;
            const fileRef=this.storage.ref(filePath);
            this.storage.upload(filePath,this.selectImage).snapshotChanges().pipe(
                finalize(()=>{
                    fileRef.getDownloadURL().subscribe(url=>{
                        this.imgSrc=url;
                        this.account.avatar=url;
                        this.accountService.changeInfo(this.account).subscribe();
                        Swal.fire('Done!', 'Avatar Updated!', 'success')
                    })
                })
            ).subscribe()
        }
    }
    showPreview(event: any) {
        if(event.target.files&&event.target.files[0]){
            const reader = new FileReader();
            reader.onload=(e:any)=>this.imgSrc=e.target.result;
            reader.readAsDataURL(event.target.files[0])
            this.selectImage=event.target.files[0]
        }else {
            this.imgSrc='#';
            this.selectImage=null;
        }
    }
    requestVip(){
        this.account.statusVip=3
        this.accountService.changeInfo(this.account).subscribe((res)=>{
            this.accountService.findById(this.accountService.getAccountToken().id).subscribe((data)=>{
                this.account=res;
                Swal.fire('Done!', 'Request sent successfully!', 'success')
            })
        })
    }

    logout() {
        localStorage.clear();
        this.router.navigate([''])
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
