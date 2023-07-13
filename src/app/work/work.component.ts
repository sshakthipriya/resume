import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { WorkService } from '../services/work.service';
import { workType } from '../type/workType';
@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent {
  startDateValue = new Date();
  endDateValue = new Date();
  workArray:workType[] =[];

  constructor(private router:Router,private workService:WorkService)
  {
    this.loader();
  }

  async loader()
  {
    this.workArray = await this.workService.getPostWork();
  }
  
  work = new FormGroup(
    {
      id:new FormControl(),
      studentId:new FormControl(),
      role:new FormControl('',[Validators.required]),
      place:new FormControl('',[Validators.required]),
      city:new FormControl('',[Validators.required]),
      state:new FormControl('',[Validators.required]),
      startDate:new FormControl(this.startDateValue,[Validators.required]),
      endDate:new FormControl(this.endDateValue,[Validators.required]),
      description:new FormControl('',[Validators.required]),
    }
  )
  get role()
  {
    return this.work.get('role')
  }
  get place()
  {
    return this.work.get('place')
  }
  get city()
  {
    return this.work.get('city')
  }
  get state()
  {
    return this.work.get('state')
  }
  get startDate()
  {
    return this.work.get('startDate')
  }
  get endDate()
  {
    return this.work.get('endDate')
  }
  get description()
  {
    return this.work.get('description')
  }
  addWork()
  {
    this.workService.addWork(this.work.value);
    this.work.reset();
    this.addCard();
  }
  addCard()
  {
    this.getWork();
  }
  removeWork(i:number)
  {
     this.workService.removeWork(i);
     this.getWork();
  }
  
  getWork()
  {
     this.workArray = this.workService.getWork();  
  }

  editWork(i:number)
  {
    const SingleWork = this.workService.getSingleWork(i);
    this.work.setValue(SingleWork);
    this.workService.editWork(i);
    this.getWork();
  }
  navigate()
  {
    this.router.navigate(['additionalSectional']);
  }
  submit()
  {
    this.workService.setWork();
    this.navigate();
  }
  back()
{
  this.router.navigate(['skill']);
}
  

}
