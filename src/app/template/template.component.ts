import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from '../services/header.service';
@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent {
   
  check = true;
  constructor(private router:Router,private headerService:HeaderService)
  {
     if(this.headerService.getHeader() == null)
     {
       this.check = false;
     }
  }
  resume1()
  {
    this.router.navigate(['resume1']);
  }
  resume2()
  {
    this.router.navigate(['resume2']);
  }
  edit()
  {
    this.router.navigate(['edit']);
  }
  back()
  {
    this.router.navigate(['header']);
  }
}
