import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup } from '@angular/forms';
import {Router} from '@angular/router';
import {CreateProvider} from 'src/app/model/CreateProvider';
import {OrderLover} from 'src/app/model/OrderLover';
import {AccountService} from 'src/app/service/account/account.service';
import { CommentService } from 'src/app/service/comment/comment.service';
import {OrderLoverService} from 'src/app/service/Order/order-lover.service';
import { ProviderService } from 'src/app/service/provider/provider.service';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-user-show-bill',
    templateUrl: './user-show-bill.component.html',
    styleUrls: ['./user-show-bill.component.css']
})
export class UserShowBillComponent implements OnInit {

    listBillOfAccount: OrderLover[] = [];

    idAccount: number = -1;

    account: any;
    roleString: string = '';
    statusProvider!: number;
    provider!: CreateProvider;
    orderLovers: OrderLover[] = [];
    rateForm = new FormGroup({
        rate: new FormControl(),
        comment : new FormControl(),
        account : new FormControl(),
        provider : new FormControl()
    })
    

    showCart(id: number, statusOrder: number) {
        this.orderLoverService.getAllBillOfAccountByIdAndStartOrder(id, statusOrder).subscribe((data: OrderLover[]) => {
            this.orderLovers = data;
        })
    }

    constructor(private orderLoverService: OrderLoverService,
                private accountService: AccountService,
                private router: Router,
                private providerService: ProviderService,
                private commentService:CommentService
    ) {
    }

    ngOnInit(): void {
        this.getAllBillOfAccountById();
        this.accountService.findById(this.accountService.getAccountToken().id).subscribe(res => {
            this.account = res;
            this.showCart(this.account.id, 1);
            this.providerService.findProviderByAccount_Id(this.accountService.getAccountToken().id).subscribe(res => {
                if (res != null) {
                    this.statusProvider = res.statusProvider;
                }
            })
        });
    }
    goToTheHome() {
        if(this.account.gender=="Male") {
            this.router.navigate(["/homeBoy"]);
        } else this.router.navigate(["/homeGirl"]);
    }
    goToProviderSetting() {
        this.router.navigate(["/profileProvider"])
    }
    createProvider() {
        const providerCreate = new CreateProvider("", 0, 0, 3, this.account)
        this.providerService.createProvider(providerCreate).subscribe((res: any) => {
            Swal.fire('Done!', 'Sended!', 'success');
            this.providerService.findProviderByAccount_Id(this.accountService.getAccountToken().id).subscribe(res => {
                if (res != null) {
                    this.statusProvider = res.statusProvider;
                }
            })
        })

    }
    getAllBillOfAccountById() {
        this.idAccount = this.accountService.getAccountToken().id;
        this.orderLoverService.getAllBillOfAccountById(this.idAccount).subscribe((data) => {
            this.listBillOfAccount = data;
            console.log(data);
        })
    }

    changeToCompleted(idOrder: number) {
        this.orderLoverService.findOrderById(idOrder).subscribe((res)=>{
            // @ts-ignore
            this.rateForm.get("account").setValue(res.account)
            // @ts-ignore
            this.rateForm.get("provider").setValue(res.provider)
        })
        this.orderLoverService.changeToCompleted(idOrder).subscribe(() => {
            this.getAllBillOfAccountById();
        })
    }

    getAllBillOfAccountByIdAndStartOrder(idAccount: number, statusOrder: number) {

        this.orderLoverService.getAllBillOfAccountByIdAndStartOrder(idAccount, statusOrder).subscribe((data) => {
            this.listBillOfAccount = data;
        })
    }

    goToMyOrder() {
        this.router.navigate(['/userShowBill'])
    }
    goToMyBill() {
        this.router.navigate(['/providerShowBill'])
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
    rate5(){
        // @ts-ignore
        this.rateForm.get("rate").setValue(5)
    }
    rate4(){
        // @ts-ignore
        this.rateForm.get("rate").setValue(4)
    }
    rate3(){
        // @ts-ignore
        this.rateForm.get("rate").setValue(3)
    }
    rate2(){
        // @ts-ignore
        this.rateForm.get("rate").setValue(2)
    }
    rate1(){
        // @ts-ignore
        this.rateForm.get("rate").setValue(1)
    }
    

    sendComment(){
        console.log(this.rateForm.value)
        this.commentService.saveComment(this.rateForm.value).subscribe((data)=>{
            this.router.navigate(['/bill/'+this.rateForm.value.provider.id]);
            this.closeModalAndBack();
        })
        console.log(this.rateForm.value.provider.id)
    }
    closeModalAndBack() {
        // @ts-ignore
        UIkit.modal('#modal-example').hide();
    }
    
   
}
