import {Component, OnInit} from '@angular/core';
import {AngularFireStorage} from '@angular/fire/compat/storage';
import {Router} from '@angular/router';
import {finalize} from 'rxjs';
import {AccountForChange} from '../model/AccountForChange';
import {Image1} from '../model/Image1';
import {ImageNoId} from '../model/ImageNoId/ImageNoId';
import { OrderLover } from '../model/OrderLover';
import {AccountService} from '../service/account/account.service';
import {ImageService} from '../service/image/image.service';
import { OrderLoverService } from '../service/Order/order-lover.service';
import {ProviderService} from '../service/provider/provider.service';

@Component({
    selector: 'app-image',
    templateUrl: './image.component.html',
    styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
    account!: AccountForChange;
    statusProvider!: number;
    selectImage: any[] = [];
    imgSrc: String[] = [];
    showImgActive: Image1[] = [];
    count!: number;
    showMore: boolean = false;
    id!: number;
    listMoreImages: Image1[] = [];
    orderLovers : OrderLover[] = [];
    

    constructor(private router: Router,
                private storage: AngularFireStorage,
                private accountService: AccountService,
                private providerService: ProviderService,
                private imageService: ImageService,
                private orderLoverService: OrderLoverService
    ) {
    }

    ngOnInit() {
        this.id = this.accountService.getAccountToken().id;
        this.imageService.findByAccount_IdAAndStatusImg2(this.id).subscribe(res => {this.listMoreImages=res});
        this.imageService.findByAccount_IdAAndStatusImg1(this.id).subscribe(res => {
            this.showImgActive = res;
            this.count = this.showImgActive.length;
            this.showCart(this.id,1);
        })
        this.accountService.findById(this.id).subscribe(res => this.account = res)
        this.providerService.findProviderByAccount_Id(this.id).subscribe(res => {
            if (res != null) {
                this.statusProvider = res.statusProvider;
            }
        })
    }
    showCart(id: number, statusOrder: number) {
        this.orderLoverService.getAllBillOfAccountByIdAndStartOrder(id, statusOrder).subscribe(data => {
            this.orderLovers = data;
        })
    }

    goToTheHome() {
        if (this.account.gender == "Male") {
            this.router.navigate(["/homeBoy"]);
        } else this.router.navigate(["/homeGirl"]);
    }

    logout() {
        localStorage.clear();
        this.router.navigate([''])
    }

    summit() {
        for (let i = 0; i < this.selectImage.length; i++) {
            if (this.selectImage[i] !== null) {
                const filePath = `${this.selectImage[i].name.split('.').slice('0,-1').join('.')}_${new Date().getTime()}`;
                const fileRef = this.storage.ref(filePath);
                this.storage.upload(filePath, this.selectImage[i]).snapshotChanges().pipe(
                    finalize(() => {
                        fileRef.getDownloadURL().subscribe((url) => {
                            if (this.count < 9) {
                                const image: ImageNoId = new ImageNoId(url, this.account, 1)
                                this.count += 1
                                this.imageService.saveImage(image).subscribe(res => this.imageService.findByAccount_IdAAndStatusImg1(this.id).subscribe(res => this.showImgActive = res));
                            } else {
                                const imageChange: Image1 = this.showImgActive[8 - i];
                                imageChange.statusImg = 2;
                                this.imageService.editImage(imageChange).subscribe(res => {
                                    const image: ImageNoId = new ImageNoId(url, this.account, 1)
                                    this.imageService.saveImage(image).subscribe(res => this.imageService.findByAccount_IdAAndStatusImg1(this.id).subscribe(res => this.showImgActive = res));
                                });

                            }
                        })
                    })
                ).subscribe()
            }
        }
    }

    moreImages() {
            if (this.showMore == false) {
                this.showMore = true;
            } else {
                this.showMore = false
            }
    }

    showPreview(event: any) {
        for (let i = 0; i < event.target.files.length; i++) {
            if (event.target.files && event.target.files[i]) {
                const reader = new FileReader();
                reader.onload = (e: any) => this.imgSrc[i] = e.target.result;
                reader.readAsDataURL(event.target.files[i]);
                this.selectImage[i] = event.target.files[i]
            }
        }
        console.log(this.selectImage)
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

    goToEditProvider() {
        this.router.navigate(['/profileProvider'])
    }

    goToMyOrder() {
        this.router.navigate(["/userShowBill"])
    }

    goToMyBill() {
        this.router.navigate(["/providerShowBill"])
    }
}