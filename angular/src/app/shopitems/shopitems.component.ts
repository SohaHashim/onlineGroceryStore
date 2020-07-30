import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service';
import {ProductModel} from './product.model';
import {Router} from '@angular/router';
import {CartComponent} from '../cart/cart.component'
@Component({
  selector: 'app-shopitems',
  templateUrl: './shopitems.component.html',
  styleUrls: ['./shopitems.component.css']
})
export class ShopitemsComponent implements OnInit {
  products: ProductModel[];
  product=<any>('');
  imageWidth:number = 150;
  imageMargin: number = 150;
  constructor(private productService: ProductService,private router:Router) { }

  ngOnInit(): void {
    console.log("call for getting products");
    this.productService.getproducts().subscribe((data)=>{
      this.products=JSON.parse(JSON.stringify(data));
    })
  }

  // addtocart(id){
  //   console.log(id);
  //    this.router.navigate(['/cart',id]);

    // this.productService.getsingleproduct(id).subscribe((data)=>{
    //   this.product=JSON.parse(JSON.stringify(data));
    //   console.log(this.product);
    //})
  //}
  tocart(item){
    alert("ADDED TO CART!");
    console.log(item);
    this.productService.sendtocart(item);
  }

}
