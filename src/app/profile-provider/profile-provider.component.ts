import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Account} from '../model/Account';
import {OrderLover} from '../model/OrderLover';
import {Provider} from '../model/Provider';
import {AccountService} from '../service/account/account.service';
import {ProviderService} from '../service/provider/provider.service';
import * as moment from 'moment';
import {OrderLoverService} from '../service/Order/order-lover.service';
import Swal from 'sweetalert2';
import {ProvisionProviderService} from '../service/provisionprovider/provisionprovider.service';
import {ProvisionProvider} from '../model/ProvisionProvider';
import { CommentService } from '../service/comment/comment.service';
import {Comment} from '../model/Comment';

@Component({
    selector: 'app-profile-provider',
    templateUrl: './profile-provider.component.html',
    styleUrls: ['./profile-provider.component.css']
})
export class ProfileProviderComponent implements OnInit {
    provider!: Provider;
    orderLover: OrderLover = new OrderLover();
    formOrder!: any;
    account!: Account;
    startTimeConvert!: String;
    endTimeConvert!: String;
    providerProvisions: ProvisionProvider[] = [];
    listComment : Comment[] = [];
    listOrderDone : OrderLover[] = [];
    orderDone !: OrderLover
    averageScore !: number
    starsScore !: number
    countComment !: number
    constructor(private providerService: ProviderService,
                private route: ActivatedRoute,
                private router: Router,
                private accountService: AccountService,
                private orderLoverService: OrderLoverService,
                private provisionProviderService: ProvisionProviderService,
                private commentService: CommentService) {
    }

    rateForm = new FormGroup({
        rate: new FormControl(),
        comment : new FormControl(),
        account : new FormControl(),
        provider : new FormControl()
    })

    ngOnInit() {
        this.commentService.averageScore(+this.route.snapshot.params['id']).subscribe((data)=>{
            this.averageScore = data;
            
        })
        this.commentService.starsScore(+this.route.snapshot.params['id']).subscribe((data)=>{
            this.starsScore = data;

        })
        this.commentService.countComment(+this.route.snapshot.params['id']).subscribe((data)=>{
            this.countComment = data;
        })

        this.accountService.findById(this.accountService.getAccountToken().id).subscribe(res => this.account = res)
        this.provisionProviderService.findProvisionProviderByProviderIdAndStatusServiceProvider(+this.route.snapshot.params['id']).subscribe(data => this.providerProvisions = data)
        this.providerService.findProviderById(+this.route.snapshot.params['id']).subscribe(res => this.provider = res)
        this.formOrder = new FormGroup({
            startOrder: new FormControl(),
            selectTime: new FormGroup({
                orderTime: new FormControl(),
            }),
            total: new FormControl()
        })
        this.commentService.findCommentById(+this.route.snapshot.params['id']).subscribe((res)=>{
            // @ts-ignore
            this.listComment = res;
            
        })

        this.orderLoverService.findOrderByAccountIdAndProviderId(this.accountService.getAccountToken().id, +this.route.snapshot.params['id']).subscribe((data)=>{
            // @ts-ignore
            this.listOrderDone = data;
            
        })

        // @ts-ignore
        this.rateForm.get("account").setValue(this.accountService.getAccountToken())
        this.providerService.findProviderById(+this.route.snapshot.params['id']).subscribe((res) => {
            this.provider = res;
            // @ts-ignore
        this.rateForm.get("provider").setValue(this.provider)
    }
        )
    }

    caculatorTotal() {
        this.formOrder.get('total').setValue(this.formOrder.value.selectTime.orderTime * this.provider.price)
    }


    createOrderLover() {


        // @ts-ignore
        this.startTimeConvert = document.getElementById('startOrder').value;
        this.orderLover.startOrder = this.startTimeConvert;
        this.orderLover.orderTime = this.formOrder.value.selectTime.orderTime;
        this.orderLover.total = this.formOrder.value.total;
        // @ts-ignore
        this.startTimeConvert = moment(this.startTimeConvert).format('x');
        this.orderLover.endOrder = moment.unix(+this.startTimeConvert + this.orderLover.orderTime * 3600).format(" DD MM YYYY, h:mm A")
        this.orderLover.statusOrder = 2;
        this.orderLover.account = this.account
        this.orderLover.provider = this.provider
        if (this.account.wallet > this.orderLover.total) {
            this.orderLoverService.createOrder(this.orderLover).subscribe((res) => {
                Swal.fire('Done!', 'Sended!', 'success')
                this.router.navigate(["/userShowBill"])
            });
        } else {
            Swal.fire('Your balance is not enough! please refill')
        }
    }

    closeOrderLover() {

        // @ts-ignore
        this.startTimeConvert = document.getElementById('startOrder').value;
        this.orderLover.startOrder = this.startTimeConvert;
        this.orderLover.orderTime = this.formOrder.value.selectTime.orderTime;
        this.orderLover.total = this.formOrder.value.total;
        // @ts-ignore
        this.startTimeConvert = moment(this.startTimeConvert).format('x');
        this.orderLover.endOrder = moment.unix(+this.startTimeConvert + this.orderLover.orderTime * 3600).format(" DD MM YYYY, h:mm A")
        this.orderLover.statusOrder = 1;
        this.orderLover.account = this.account
        this.orderLover.provider = this.provider
        this.orderLoverService.createOrder(this.orderLover);
        this.orderLoverService.createOrder(this.orderLover).subscribe((res) => {
            Swal.fire({
                icon: 'error',
                title: 'Cancel...',
                text: 'See you again',
            })
        });
    }


    logout() {
        localStorage.clear();
        this.router.navigate([''])
    };

    goToProfile() {
        this.router.navigate(['/showProfile'])
    };

    goToEditProfile() {
        this.router.navigate(['/changeInfo'])
    }

    goToProvider() {
        this.router.navigate(['/supplier'])
    };
    
    sendComment(){
        console.log(this.rateForm.value)
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

    send(){

        this.commentService.saveComment(this.rateForm.value).subscribe((data)=>{
            location.reload();
        })

    }
    
}
