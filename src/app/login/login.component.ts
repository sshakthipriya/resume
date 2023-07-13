import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { HomeService } from '../services/home.service';
import { IdService } from '../services/id.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private loginService:LoginService,
              private router:Router,
              private homeService:HomeService,
              private primaryKey:IdService,
              private location:Location) {
               
               
              } 
  ngOnInit(): void {
   
  }

   login = new FormGroup({
    email : new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required])
   })
   show:boolean = false;

   changePasswordType()
   {
     this.show = !this.show;
   }
  
   errormessage:string ="";

   navigate()
   {
    this.router.navigate(['header']);
   }
   get email()
   {
      return this.login.get('email');
   }

   get password()
   {
      return this.login.get('password');
   }
  submit()
  {
     this.loginService.checkUser(this.login.value.email,this.login.value.password).subscribe(
      (response:any) =>
      {
             this.homeService.getname(response.name);
             this.primaryKey.setId(response.id);
            
             this.navigate();
      },
      (error)=>
      {
           if(error.status == 404)
           {
              this.errormessage = "Invalid email and Invalid password";
           }
      }
      )
  }
 

}
