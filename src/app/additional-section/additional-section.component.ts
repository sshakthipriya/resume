import { Component } from '@angular/core';
import { FormControl,FormGroup,FormGroupName,Validators } from '@angular/forms';
import { AddtionalSectionService } from '../services/addtional-section.service';
import { Router } from '@angular/router';
import { additionalSectionalType } from '../type/addtionalSectionalType';
@Component({
  selector: 'app-additional-section',
  templateUrl: './additional-section.component.html',
  styleUrls: ['./additional-section.component.css']
})
export class AdditionalSectionComponent {
  
  addtionalSectionalArray :additionalSectionalType[] = []

  constructor(private addtionSectionService:AddtionalSectionService,private router:Router)
  {
    this.loader();
  }

  async loader()
  {
    this.addtionalSectionalArray = await this.addtionSectionService.getPostSection();
  }


  additional = new FormGroup(
    {
      id:new FormControl(),
      studentId:new FormControl(),
    sectionHeader:new FormControl('',Validators.required),
    sectionDescription:new FormControl('',Validators.required)
  }
  );

  get sectionHeader()
  {
    return this.additional.get('sectionHeader');
  }

  get sectionDescription()
  {
    return this.additional.get('sectionDescription');
  }

  addSection()
  {
    this.addtionSectionService.addSection(this.additional.value);
    this.additional.reset();
    this.setSectionArray();
  }

  removeSection(i:number)
  {
    this.addtionSectionService.removeSection(i);
    this.setSectionArray();
  }

  editSection(i:number)
  {
    const section = this.addtionSectionService.getSingleSection(i);
    this.additional.setValue(section);
    this.addtionSectionService.editSection(i);
    this.setSectionArray();
  }

  navigate()
  {
     this.router.navigate(['template']);
  }

  setSectionArray()
  {  
     this.addtionSectionService.setSection()
     this.addtionalSectionalArray = this.addtionSectionService.getSection();
  }


  submit()
  {
    console.log(this.addtionalSectionalArray);
    this.navigate();
  }
  back()
  {
     this.router.navigate(['work']);
  }

}
