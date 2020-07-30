import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ProductModel } from '../shopitems/product.model';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  checkoutUserDetails={fnmae:''};
  checkoutForm = this.fb.group(
    {
      fname:['',[Validators.required]],
      lname:['',[Validators.required]],
      address:['',[Validators.required]],
      city:['',[Validators.required]],
      postcode:['',[Validators.required,Validators.minLength(6)]],
      phone:['',[Validators.required,Validators.pattern('')]]
    }
  )
  public products: ProductModel[];
  title:string="Cart";
  id='';
  total:number = 0;
  productItem= new ProductModel(null,null,null,null);
  constructor(private productService: ProductService,private route: ActivatedRoute, private router:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
    console.log("call for getting products");
    this.productService.getcartproducts().subscribe((data)=>{
      this.products=JSON.parse(JSON.stringify(data));
      for(var i=0;i<this.products.length;i++){
        this.total+= this.products[i].quantity*this.products[i].price; 
      }
    })
  }
placeorder(){
  alert("ORDER PLACED!");

}
checkoutUser()
{
  //this._router.navigate(['/login'])
  alert("ORDER PLACED!");
console.log("order placed");
  console.log(this.checkoutForm.value);
  this.productService.checkoutform(this.checkoutForm.value);
  this.router.navigate(['/checkoutdisplay'])
  // this._auth.checkoutUser(this.checkoutForm.value)
  // .subscribe(
  //   res=> {console.log(res);
  //   localStorage.setItem('token',res.token);
    //this.router.navigate(['/'])
  // },
  //   err=>console.log(err)
  // )
}
}
