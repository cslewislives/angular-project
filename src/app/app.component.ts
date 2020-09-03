import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-project';
  links = [
    {path: '/home', title: 'Home'},
    {path: '/orders', title: 'Orders'}
  ]
}
