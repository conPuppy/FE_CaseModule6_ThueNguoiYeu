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
  
  constructor(private orderService: OrderLoverService) {
  }
  
    ngOnInit(): void {
      this.getAllOrder();
    }
    
    
    getAllOrder() {
    this.orderService.getAllOrder().subscribe((data) => {
      this.listOrderLover = data;
    })
    }

  getOrderByStatus(statusOrder: number) {
    this.orderService.getOrderByStatus(statusOrder).subscribe((data) =>{
      this.listOrderLover = data;
    })
  }
}
