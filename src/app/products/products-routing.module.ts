import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewProductComponent } from './new-product/new-product.component';
import { RemoveComponent } from './remove/remove.component';
import { ModifynameComponent } from './modifyname/modifyname.component';
import { ModifypriceComponent } from './modifyprice/modifyprice.component';


const routes: Routes = [
  {path:'new',component:NewProductComponent},
  {path:'remove',component:RemoveComponent},
  {path:'modifyname',component:ModifynameComponent},
  {path:'modifyprice',component:ModifypriceComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
