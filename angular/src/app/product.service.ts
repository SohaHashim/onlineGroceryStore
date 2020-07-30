import { Injectable } from '@angular/core';
import { Product } from './shop/product.model';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[];
  constructor(private http:HttpClient) {}
  getproducts(){
    console.log("calling server for products");
    return this.http.get<any>("http://localhost:3000/products");
  }

  getcartproducts(){
    console.log("calling server for cart products");
    return this.http.get<any>("http://localhost:3000/cartproducts");
  }

  getsingleproduct(id){
    console.log(id);
    return this.http.get<any>("http://localhost:3000/singleproduct"+`/${id}`);
  }

 
  deleteProductData(id){
    return this.http.post("http://localhost:3000/delete",{"id":id})
    .subscribe(data=>{console.log(data)})
  }

  sendtocart(item){
    console.log(item);
    return this.http.post("http://localhost:3000/insert",{"product":item})
    .subscribe(data=> {console.log(data)})
  }
  editproduct(_id){
    return this.http.get<any>("http://localhost:3000/edit"+`/${_id}`);
    }
    
  
  updateProduct(id,item){
    console.log("going to server side update");
    // console.log(id);
    // console.log(item);
    return this.http.put<any>("http://localhost:3000/update"+`/${id}`,{"product":item}).subscribe((res)=>{
      console.log("back to frontend");
    console.log(res);
    })
  }
  checkoutform(user){
    console.log(user);
    return this.http.post("http://localhost:3000/insertcheckout",{"user":user})
    .subscribe(data=> {console.log(data)})
  }
  getcheckoutform(){
    console.log("to get checkout display")
    return this.http.get<any>("http://localhost:3000/checkoutdisplay");
  }
  addproduct(item){
    console.log("to add products");
    return this.http.post("http://localhost:3000/addproduct",{"product":item});

  }
  // cartproduct(_id){
  //   return this.http.get<any>("http://localhost:3000/cart"+`/${_id}`);
  //   }
}
