import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'customers',loadChildren:()=>import('./customers/customers.module').then(m=>m.CustomersModule),canActivate:[AuthGuard]},
  {path:'products',loadChildren:()=>import('./products/products.module').then(m=>m.ProductsModule),canActivate:[AuthGuard]},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'logout', component:HomeComponent},
  {path:'transactions',loadChildren:()=>import('./transactions/transactions.module').then(m=>m.TransactionsModule),canActivate:[AuthGuard]},
  {path:'**',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
