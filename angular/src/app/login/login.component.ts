import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import {Router} from '@angular/router';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginUserDetails={email:'',password:''};
  loginForm = this.fb.group(
    {
      
      email:['',[Validators.required,Validators.pattern('')]],
      password:['',[Validators.required,Validators.minLength(6)]]
    }
  )
  constructor(private _auth:AuthService,private _router:Router,private fb:FormBuilder) { }
  loginUser(){
    // this.loginUserDetails.type = this.loginForm.get('type').value;
    // console.log(this.loginUserDetails.type);
    // alert("HELLO "+this.loginUserDetails.type);

    // if(this.loginUserDetails.type === "ADMIN"){
    //   //alert("this is admin");
    //   console.log(this.loginForm.value);
    // this._auth.loginUser(this.loginForm.value)
    // .subscribe(
    //   res=> {console.log(res);
    //   localStorage.setItem('token',res.token);
    //   this._router.navigate(['/checkoutdisplay'])
    // },
    //   err=>console.log(err)
    // )
    // }else{
    //  //alert("this is customer");
    //   console.log(this.loginForm.value);
    //   this._auth.loginUser(this.loginForm.value)
    //   .subscribe(
    //     res=> {console.log(res);
    //     localStorage.setItem('token',res.token);
    //     this._router.navigate(['/shopitems'])
    //   },
    //     err=>console.log(err)
    //   )
    // }

    console.log(this.loginForm.value);
    this._auth.loginUser(this.loginForm.value)
    .subscribe(
      res=> {console.log(res);
      localStorage.setItem('token',res.token);
      this._router.navigate(['/shopitems'])
    },
      err=>console.log(err)
    )
  }

  ngOnInit(): void {
   
  }
  

}
