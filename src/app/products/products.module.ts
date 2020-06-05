import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { ProductsRoutingModule } from './products-routing.module';
import { NewProductComponent } from './new-product/new-product.component';
import { RemoveComponent } from './remove/remove.component';
import { ModifynameComponent } from './modifyname/modifyname.component';
import { ModifypriceComponent } from './modifyprice/modifyprice.component';


@NgModule({
  declarations: [
    NewProductComponent,
    RemoveComponent,
    ModifynameComponent,
    ModifypriceComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
