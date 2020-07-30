import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ProductModel } from '../shopitems/product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers: [ProductService]
})
export class CartComponent implements OnInit {
  public products: ProductModel[];
  title:string="Cart";
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


      //this.id=parameterMap.get('id');
  //   console.log("inside cart");
  //   this.route.params.subscribe(params=>{
  //     this.id=params['id'];
    
  //   });
  //   console.log(this.id);

  //  this.productService.getsingleproduct(this.id).subscribe(res=>{
  //    this.productItem=JSON.parse(JSON.stringify(res));
  //   console.log("placed in cart ");
  //   console.log(this.productItem);
  // })
  }
 
  deleteProduct(id){
    console.log(id);
    this.productService.deleteProductData(id);
    console.log("called");
    //this.router.navigate(['/cart']);
    location.reload();
  }
  onEdit(id){
    console.log(id);
    this.router.navigate(['/edit',id]);

  }
}