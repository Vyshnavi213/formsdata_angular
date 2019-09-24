import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrderListComponent } from './order-list/order-list.component';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material';
import { MatFormFieldModule, MatInputModule } from '@angular/material';


@NgModule({
  declarations: [OrderListComponent],
  imports: [
    CommonModule,
    OrdersRoutingModule, HttpClientModule, MatTableModule, MatPaginatorModule, MatFormFieldModule, MatInputModule
  ]
})
export class OrdersModule { }
