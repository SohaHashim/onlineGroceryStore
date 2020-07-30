import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router} from '@angular/router'
import { ProductModel } from '../shopitems/product.model';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-addproducts',
  templateUrl: './addproducts.component.html',
  styleUrls: ['./addproducts.component.css']
})
export class AddproductsComponent implements OnInit {
  productItem= new ProductModel(null,null,null,null);
  id='';

  constructor(private productService: ProductService,private route: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
  }
addproducts(item){
  this.productService.addproduct(item).subscribe(res=>{
    //this.productItem=JSON.parse(JSON.stringify(res));
    console.log("data is sent");
  })
}
  
}
