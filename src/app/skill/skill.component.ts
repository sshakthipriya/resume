import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { SkillService } from '../services/skill.service';
import { skillType } from '../type/skillType';
import { Router } from '@angular/router';
@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent {
  skillArray:skillType[] = [];
  constructor(private skillService:SkillService,private router:Router )
  {
     this.loader();
  }

  async loader()
  {
    this.skillArray = await this.skillService.getPostSkill();

  }


  skills = new FormGroup({
    id:new FormControl(),
    studentId:new FormControl(),
    skill:new FormControl('',[Validators.required]),
    level:new FormControl('',[Validators.required])
  })
 

addSkill()
{
  this.skillService.addSkill(this.skills.value);
  this.skills.reset();
  this.getSkill();
}


getSkill()
{
    this.skillArray = this.skillService.getSkill();
}



removeSkill(i:number)
  {
     this.skillService.removeSkill(i);
     this.getSkill();
  }


editSkill(i:number)
  {
    const SingleSkill = this.skillService.getSingleSkill(i);
    this.skills.setValue(SingleSkill);
    this.skillService.editSkill(i);
    this.getSkill();
  }

navigate()
  {
    this.router.navigate(['work']);
  }

submit()
{
  this.skillService.setSkills();
  this.navigate();
}


back()
{
  this.router.navigate(['education']);
}

}
