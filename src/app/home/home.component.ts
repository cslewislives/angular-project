import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../shared/services/orders.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  orders = null;


  constructor(private ordersService: OrdersService) { }

  ngOnInit(): void {
    this.ordersService.all()
    .subscribe(orders => this.orders = orders);
  }

}
