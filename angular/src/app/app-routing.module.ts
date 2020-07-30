import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ShopComponent } from './shop/shop.component';
import {ShopitemsComponent} from './shopitems/shopitems.component';
import {HomeComponent} from './home/home.component';
import {CartComponent} from './cart/cart.component';
import {ContactComponent} from './contact/contact.component';
import {CheckoutComponent} from './checkout/checkout.component';
import {EditproductComponent} from './editproduct/editproduct.component';
import {AuthGuard} from './auth.guard';
import {CheckoutdisplayComponent} from './checkoutdisplay/checkoutdisplay.component';
import { AddproductsComponent} from './addproducts/addproducts.component';

  const routes: Routes = [ 
   {path:'',component:HomeComponent}, 
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'shop',component:ShopComponent},
  {path:'shopitems',component:ShopitemsComponent},
  {path:'cart',component:CartComponent,canActivate:[AuthGuard]},
  {path:'contact',component:ContactComponent},
  {path:'checkout',component:CheckoutComponent,canActivate:[AuthGuard]},
  {path:'edit/:id',component:EditproductComponent},
  {path:'update/:id',component:EditproductComponent},
  {path:'checkoutdisplay',component:CheckoutdisplayComponent},
  {path: "addproducts",component: AddproductsComponent}

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
