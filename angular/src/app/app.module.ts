import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms'
import {AuthService } from './auth.service';
import { ReactiveFormsModule } from '@angular/forms';
import {AuthGuard} from './auth.guard';
import {TokenInterceptorService} from './token-interceptor.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { ShopitemsComponent } from './shopitems/shopitems.component';
import { CartComponent } from './cart/cart.component';
import { ContactComponent } from './contact/contact.component';
//import { ItemComponent } from './item/item.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { EditproductComponent } from './editproduct/editproduct.component';
import { CheckoutdisplayComponent } from './checkoutdisplay/checkoutdisplay.component';
import { AddproductsComponent } from './addproducts/addproducts.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    ShopComponent,
    ShopitemsComponent,
    CartComponent,
    ContactComponent,
    // ItemComponent,
    CheckoutComponent,
    EditproductComponent,
    CheckoutdisplayComponent,
    AddproductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthService,AuthGuard,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:TokenInterceptorService,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
