import { Component, OnInit, Input } from '@angular/core';
import { OrdersService } from '../shared/services/orders.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  orders;
  buyOrders;
  sellOrders;

  constructor(private ordersService: OrdersService) { }

  ngOnInit(): void {
    this.resetCount();
    this.ordersService.all()
    .subscribe(orders => {
      this.orders = orders
      console.log(this.orders)
      this.countOrders(this.orders);
    });
  }

  resetCount() {
    this.buyOrders = 0;
    this.sellOrders = 0;
  }

  countOrders(orders) {
    for (let order of orders) {
      if(order.buyOrSell === 'buy') {
        this.buyOrders++
      } else {
        this.sellOrders++
      }
    }
    console.log('buys:', this.buyOrders);
    console.log('sells:', this.sellOrders);
  }



}
