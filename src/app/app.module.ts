import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { NewOneComponent } from './new-one/new-one.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NewProductComponent } from './new-product/new-product.component';
import { OrderlistComponent } from './orderlist/orderlist.component';
import { DatePipe } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DataService } from './data.service';
import { AuthGuard } from './auth.guard';
import { TokenintcptService } from './tokenintcpt.service';
import { UserordersComponent } from './userorders/userorders.component';
@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    NewOneComponent,
    NewProductComponent,
    OrderlistComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    UserordersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [DataService,AuthGuard,DatePipe,TokenintcptService,{
  provide:HTTP_INTERCEPTORS,
  useClass:TokenintcptService,
  multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
