import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OrderFormComponent } from './orders/order-form/order-form.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'add', component: OrderFormComponent},
  { path: '**', redirectTo: '/home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
