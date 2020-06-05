import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NewOneComponent} from './new-one/new-one.component'
import { CustomersRoutingModule } from './customers-routing.module';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import { RemoveShopComponent } from './remove-shop/remove-shop.component';
import { ModifyshopComponent } from './modifyshop/modifyshop.component'

@NgModule({
  declarations: [
    NewOneComponent,
    RemoveShopComponent,
    ModifyshopComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    CustomersRoutingModule
  ]
})
export class CustomersModule { }
