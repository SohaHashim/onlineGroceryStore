import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import {Router} from '@angular/router';
import {FormBuilder, Validators} from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerUserDetails={email:'',password:'',type:''};
  registerForm = this.fb.group(
    {
      type:['',[Validators.required]],
      email:['',[Validators.required,Validators.pattern('')]],
      password:['',[Validators.required,Validators.minLength(6)]]
    }
  )
 
  constructor(private _auth:AuthService,private _router:Router,private fb:FormBuilder) { }
  registerUser()
  {
    this.registerUserDetails.type = this.registerForm.get('type').value;
    console.log(this.registerUserDetails.type);
    alert("HELLO "+this.registerUserDetails.type);

    if(this.registerUserDetails.type === "ADMIN"){
      //alert("this is admin");
      console.log(this.registerForm.value);
    this._auth.registerUser(this.registerForm.value)
    .subscribe(
      res=> {console.log(res);
      localStorage.setItem('token',res.token);
      this._router.navigate(['/checkoutdisplay'])
    },
      err=>console.log(err)
    )
    }else{
     //alert("this is customer");
      console.log(this.registerForm.value);
      this._auth.registerUser(this.registerForm.value)
      .subscribe(
        res=> {console.log(res);
        localStorage.setItem('token',res.token);
        this._router.navigate(['/login'])
      },
        err=>console.log(err)
      )
    }
    //this._router.navigate(['/register'])

    // console.log(this.registerForm.value);
    // this._auth.registerUser(this.registerForm.value)
    // .subscribe(
    //   res=> {console.log(res);
    //   localStorage.setItem('token',res.token);
    //   this._router.navigate(['/login'])
    // },
    //   err=>console.log(err)
    // )
  }
  ngOnInit(): void {
  }

}
