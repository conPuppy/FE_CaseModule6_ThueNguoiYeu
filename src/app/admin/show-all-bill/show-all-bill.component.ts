import { Component, OnInit } from '@angular/core';
import { OrderLover } from 'src/app/model/OrderLover';
import { OrderLoverService } from 'src/app/service/Order/order-lover.service';

@Component({
  selector: 'app-show-all-bill',
  templateUrl: './show-all-bill.component.html',
  styleUrls: ['./show-all-bill.component.css']
})
export class ShowAllBillComponent implements OnInit{
  
  listOrderLover: OrderLover[] = []
  
  constructor(private orderLoverService: OrderLoverService) {
  }
  
    ngOnInit(): void {
      this.getAllOrder();
    }
    
    
    getAllOrder() {
    this.orderLoverService.getAllOrder().subscribe((data) => {
      this.listOrderLover = data;
    })
    }

  getOrderByStatus(statusOrder: number) {
    this.orderLoverService.getOrderByStatus(statusOrder).subscribe((data) =>{
      this.listOrderLover = data;
    })
  }
}
