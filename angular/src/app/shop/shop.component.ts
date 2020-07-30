import { Component, OnInit } from '@angular/core';
import {Product} from './product.model';
import {ProductService} from '../product.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  title:string='PRODUCTS';
  public products: Product[];
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getproducts().subscribe((data)=>{
      this.products=JSON.parse(JSON.stringify(data));
    })
    // this.products = this.productService.findAll();
  }

}
