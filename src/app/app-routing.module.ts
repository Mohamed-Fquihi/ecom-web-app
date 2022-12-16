import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductsComponent} from "./products/products.component";
import {CustomersComponent} from "./customers/customers.component";
import {OrdersComponent} from "./orders/orders.component";
import {BillDetailsComponent} from "./bill-details/bill-details.component";

const routes: Routes = [
  {
    path :"products", component : ProductsComponent
  },
  {
    path :"customers", component : CustomersComponent
  },
  {
    path :"orders/:customerId", component : OrdersComponent
  },
  {
    path :"bill-details/:customerId", component : BillDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
