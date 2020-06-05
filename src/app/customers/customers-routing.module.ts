import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NewOneComponent} from './new-one/new-one.component';
import { ModifyshopComponent } from './modifyshop/modifyshop.component';
import { RemoveShopComponent } from './remove-shop/remove-shop.component';

const routes: Routes = [
  {path:'new',component:NewOneComponent},
  {path:'remove',component:RemoveShopComponent},
  {path:'modify',component:ModifyshopComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
