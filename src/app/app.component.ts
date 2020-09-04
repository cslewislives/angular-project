import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Order Book';
  links = [
    {path: '/home', icon: 'home', title: 'Home'},
    {path: '/add', icon: 'view_list', title: 'Orders'}
  ]
}
