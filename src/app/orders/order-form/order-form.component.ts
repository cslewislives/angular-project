import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/shared/services/orders.service';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {

  order;

  constructor(private ordersService: OrdersService) { }

  ngOnInit(): void {
    this.initializeOrder();
  }

  initializeOrder() {
    this.order = {
      id: null,
      currency: '',
      price: '',
      buyOrSell: ''
    }
  }

  saveOrder(order) {
    this.ordersService.create(order)
      .subscribe(result => console.log('Order Created: ', result));
  }
}
