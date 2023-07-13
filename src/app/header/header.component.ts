import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { HeaderService } from '../services/header.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  header = new FormGroup({
    firstName:new FormControl('',[Validators.required]),
    lastName:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required,Validators.email]),
    jobTitle:new FormControl('',[Validators.required]),
    phoneNumber : new FormControl('',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
    
  })
  
  constructor(private headerService: HeaderService, private router: Router) {
    this.loadHeader();
  }
  
  async loadHeader() {
    const getHeader = await this.headerService.getPostHeader();
    if (getHeader != null) {
      this.header.setValue({
        firstName: getHeader.firstName,
        lastName: getHeader.lastName,
        email: getHeader.email,
        jobTitle: getHeader.jobTitle,
        phoneNumber: getHeader.phoneNumber
      });
    }
  }
  
  
  get firstName()
  {
    return this.header.get('firstName');
  }
  get lastName()
  {
    return this.header.get('lastName');
  }
  get email()
  {
    return this.header.get('email');
  }
  get jobTitle()
  {
    return this.header.get('jobTitle');
  }
  get phoneNumber()
  {
    return this.header.get('phoneNumber');
  }
  navigate()
  {
    this.router.navigate(['profile']);
  }
  submit()
  {
    this.headerService.setHeader(this.header.value);
    this.navigate();
  }
}
