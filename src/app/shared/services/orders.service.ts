import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const BASE_URL = 'http://localhost:3000/';

@Injectable({
    providedIn: 'root'
})
export class OrdersService {
  private model = 'orders';
    private orders = [
        {
            id: 1,
            currency: 'Bitcoin',
            price: 5,
            buy: true,
            sell: false
        },
        {
            id: 2,
            currency: 'Aether',
            price: 5,
            buy: false,
            sell: true
        }
    ];

    constructor(private http: HttpClient) {}

    create(order) {

      console.log('create order', order)
      return this.http.post(this.getUrl(), order)
    }

    all() {
        return this.http.get(this.getUrl())
    }

    private getUrl() {
      return `${BASE_URL}${this.model}`
    }
}
