import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { EducationService } from '../services/education.service';
import { educationType } from '../type/educationType';
import { Router } from '@angular/router';
import { IdService } from '../services/id.service';
@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  educationArray:educationType[] = [];
  startDateValue = new Date();
  endDateValue = new Date();

  constructor(private educationService:EducationService,private router:Router,private primaryKey : IdService)
  {
    this.loader();
  }

  async loader()
  {
    this.educationArray = await this.educationService.getPostEducation();
  }
  education = new FormGroup({
    id:new FormControl(),
    studentId:new FormControl(),
    school:new FormControl('',[Validators.required]),
    degree:new FormControl('',[Validators.required]),
    city:new FormControl('',[Validators.required]),
    state:new FormControl('',[Validators.required]),
    startDate:new FormControl(this.startDateValue,[Validators.required]),
    endDate:new FormControl(this.endDateValue,[Validators.required]),
    description:new FormControl('',[Validators.required]),
  })
  get school()
  {
    return this.education.get('school')
  }
  get degree()
  {
    return this.education.get('degree')
  }
  get startDate()
  {
    return this.education.get('startDate')
  }
  get endDate()
  {
    return this.education.get('endDate')
  }
  get description()
  {
    return this.education.get('description')
  }
  get city()
  {
    return this.education.get('city')
  }
  get state()
  {
    return this.education.get('state')
  }
  addEducation()
  {
    this.educationService.addEducation(this.education.value);
    this.education.reset();
    this.addCard();
  }
  addCard()
  {
    this.getEducation();
  }
  removeCard(i:number)
  {
     this.educationService.removeEducation(i);
     this.getEducation();
  }
  
  getEducation()
  {
     this.educationArray = this.educationService.getEducation();  
  }

  editCard(i:number)
  {
    const SingleEducation = this.educationService.getSingleEducation(i);
    this.education.setValue(SingleEducation);
    this.educationService.editEducation(i);
    this.getEducation();
  }
  navigate()
  {
    this.router.navigate(['skill']);
  }
  submit()
  {
    this.educationService.setEducation();
    this.navigate();
  }
  back()
  {
    this.router.navigate(['image']);
  }

}
