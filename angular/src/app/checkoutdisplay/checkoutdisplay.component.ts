import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ProductModel } from '../shopitems/product.model';
import {checkoutModel} from '../checkout/checkout.model'
@Component({
  selector: 'app-checkoutdisplay',
  templateUrl: './checkoutdisplay.component.html',
  styleUrls: ['./checkoutdisplay.component.css']
})
export class CheckoutdisplayComponent implements OnInit {
  public products: ProductModel[];
  public checkouts: checkoutModel[];
  id='';
  total:number = 0;
  productItem= new ProductModel(null,null,null,null);

  constructor(private productService: ProductService,private route: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    console.log("call for getting products");
    this.productService.getcartproducts().subscribe((data)=>{
      this.products=JSON.parse(JSON.stringify(data));
      for(var i=0;i<this.products.length;i++){
        this.total+= this.products[i].quantity*this.products[i].price; 
      }
    })
    console.log("checkout display");
    this.productService.getcheckoutform().subscribe((data)=>{
      this.checkouts=JSON.parse(JSON.stringify(data));
  })

}
}
