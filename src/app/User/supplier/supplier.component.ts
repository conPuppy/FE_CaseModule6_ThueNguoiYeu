import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {addFormatToken} from "ngx-bootstrap/chronos/format/format";
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {finalize} from "rxjs";
import { Provision } from 'src/app/model/Provision';
import { Image } from 'src/app/model/Image';
import { AccountService } from 'src/app/service/account/account.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-supplier',
    templateUrl: './supplier.component.html',
    styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit {
    @ViewChild('uploadFile1', {static: true}) public avatarDom1: ElementRef | undefined;

    arrFiles: any = [];
    arrayPicture : string[] = [];

    arrayBasicProvision!: Provision[];
    arrayFreeProvision!: Provision[];
    arrayExtendProvision!: Provision[];

    image!: Image;
    id!: number;

    constructor(private storage: AngularFireStorage, private accountService: AccountService,private router:Router) {
    }

    ngOnInit(): void {
        this.getAllService()
    }

    submit() {
        for (let file of this.arrFiles) {
            if (file != null) {
                const filePath = file.name;
                const fileRef = this.storage.ref(filePath);
                this.storage.upload(filePath, file).snapshotChanges().pipe(
                    finalize(() => (fileRef.getDownloadURL().subscribe(
                        url => {
                            this.arrayPicture.push(url);
                            this.accountService.getAccountToken().id = this.id;
                            // Account account
                            // this.image = new Image(url, this.accountService.findById(this.id))
                            console.log(url);
                        })))
                ).subscribe();
            }
        }
    }

    uploadFileImg() {
        for (const argument of this.avatarDom1?.nativeElement.files) {
            this.arrFiles.push(argument)
        }
        this.submit();
    }

    getAllService() {


    }

    saveImage(image: Image) {
    }
    logout(){
        localStorage.clear();
        this.router.navigate(['/login'])
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
