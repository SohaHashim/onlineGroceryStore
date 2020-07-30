import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router} from '@angular/router'
import { ProductModel } from '../shopitems/product.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {
  id='';
  products: ProductModel[];
  product=<any>('');
  productItem= new ProductModel(null,null,null,null);
  constructor(private productService: ProductService,private route: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      this.id=params['id'];
      //this.id=parameterMap.get('id');
      console.log(this.id)
    })
  this.productService.editproduct(this.id).subscribe(res=>{
    this.productItem=JSON.parse(JSON.stringify(res));
    console.log("data to be edited is placed");
  })
  }
 updatedata(){
   console.log("starting update process");
   console.log(this.productItem);
   console.log(this.id);
   this.productService.updateProduct(this.id,this.productItem);
   //alert("success");
   this.router.navigate(['/cart']);
   //location.reload();
   
 }
}
