import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TransactionsRoutingModule } from './transactions-routing.module';
import { AllComponent } from './all/all.component';
import { FormComponent } from './form/form.component';
import { OrderlistComponent } from './orderlist/orderlist.component';
import { UserordersComponent } from './userorders/userorders.component';


@NgModule({
  declarations: [
    AllComponent,
    FormComponent,
    OrderlistComponent,
    UserordersComponent
  ],
  imports: [
    CommonModule,
    TransactionsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class TransactionsModule { }
