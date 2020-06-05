import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllComponent } from './all/all.component';
import { FormComponent } from './form/form.component';
import { UserordersComponent } from './userorders/userorders.component';
import { OrderlistComponent } from './orderlist/orderlist.component';


const routes: Routes = [
  {path:'alluserorders',component:AllComponent},
  {path:'neworder',component:FormComponent},
  {path:'userdues',component:UserordersComponent},
  {path:'alldues',component:OrderlistComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionsRoutingModule { }
