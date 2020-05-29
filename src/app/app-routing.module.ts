import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {NewOneComponent } from './new-one/new-one.component';
import { FormComponent } from './form/form.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NewProductComponent } from './new-product/new-product.component';
import { OrderlistComponent } from './orderlist/orderlist.component';
import { AuthGuard } from './auth.guard';
import { UserordersComponent } from './userorders/userorders.component';
const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'newOrder',component:FormComponent,canActivate:[AuthGuard]},
  {path:'NewOne',component:NewOneComponent,canActivate:[AuthGuard]},
  {path:'NewProduct',component:NewProductComponent,canActivate:[AuthGuard]},
  {path:'orders',component:OrderlistComponent,canActivate:[AuthGuard]},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'logout', component:HomeComponent},
  {path:'userorders', component:UserordersComponent},
  {path:'**',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
