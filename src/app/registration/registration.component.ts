import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../services/register.service';
import { IdService } from '../services/id.service';
 
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  
  constructor(private registerService:RegisterService,private router:Router,private primaryKey : IdService) { }

  registerationForm  = new FormGroup({
    name : new FormControl('',[Validators.required]),
    email : new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required])
  })

  get name()
  {
    return this.registerationForm.get('name');
  }
  get email()
  {
    return this.registerationForm.get('email');
  }
  get password()
  {
    return this.registerationForm.get('password');
  }
  navigate()
   {
    this.router.navigate(['header']);
   }
   show:boolean = false;

   changePasswordType()
   {
     this.show = !this.show;
   }
  errorMessage: string = '';
  register()
  {

    this.registerService.saveUser(this.registerationForm.value).subscribe(
   (response:any) =>
    {
         
          this.primaryKey.setId(response.id);
          this.navigate();
      
    },
    (error:any)=>
    {
     
       if (error.status === 500 ) {
     
        this.errorMessage = 'Email already in use';
        } 
      else {
      
        this.errorMessage = 'Error saving customer';
      }
    }
    )
  }
  

  ngOnInit(): void {
  }

}
