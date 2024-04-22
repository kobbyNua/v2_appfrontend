import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';
import { FormGroup,FormControl,FormGroupDirective } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
   
    login_forms:any;
    tokens:any
    constructor(private api:LoginService,private router:Router){
       this.loginForm()
    }

    
    loginForm=()=>{
        this.login_forms=new FormGroup({username:new FormControl(),password:new FormControl()})
    }
    authUser=(body:FormGroupDirective)=>{
           debugger
            this.api.login(body.value).subscribe(data=>{
                if(data.status=="success"){
                   localStorage.setItem('token',data.token)
                   this.router.navigateByUrl('/dashboard')
                }
            })
    }
}
