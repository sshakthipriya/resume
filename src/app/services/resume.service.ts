import { Injectable } from '@angular/core';
import { educationType } from '../type/educationType';
import { headerType } from '../type/headerType';
import { skillType } from '../type/skillType';
import { workType } from '../type/workType';
import { WorkService } from './work.service';
import { HeaderService } from './header.service';
import { ProfileService } from './profile.service';
import { EducationService } from './education.service';
import { SkillService } from './skill.service';
import { AddtionalSectionService } from './addtional-section.service';
import { additionalSectionalType } from '../type/addtionalSectionalType';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {
  
  header:headerType | null = null;
  profile:string="";
  image:any;
  education:educationType[] = [];
  skills:skillType[] = [];
  work:workType[] =[];
  additionSection : additionalSectionalType[] = [];
  

  constructor(private profileService: ProfileService,
              private headerService:HeaderService,
              private educationService:EducationService,
              private skillService:SkillService,
              private workService:WorkService,
              private additionSectionService:AddtionalSectionService){
    this.loader();
  }
  async loader()
  {
    this.profile = await this.profileService.getPostObjective();
    this.header = await this.headerService.getPostHeader();
    this.education = await this.educationService.getPostEducation();
    this.skills = await this.skillService.getPostSkill();
    this.work = await this.workService.getPostWork();
    this.additionSection = await this.additionSectionService.getPostSection();
  }
  
  
 
 
  setHeader(){
   this.header = this.headerService.getHeader() ;
  }
  getHeader()
  {
      this.setHeader();
      return this.header;
  }

  setProfile()
  {
    this.profile = this.profileService.getObjective();
  }
  getProfile()
  {
    this.setProfile();
    return this.profile;
  }
  setEducation()
  {
     this.education = this.educationService.getEducation();
  }
  getEducation()
  {
    this.setEducation();
    return this.education;
  }
  setSkill(){
    this.skills = this.skillService.getSkill();
  }
  getSkills()
  {
    this.setSkill();
    return this.skills;
  }
  setWork()
  {
     this.work = this.workService.getWork();
  }
  getWork()
  {
    this.setWork();
    return this.work;
  }

  setSection()
  {
     this.additionSection = this.additionSectionService.getSection();
  }
  getSection()
  {
    this.setSection();
    return this.additionSection;
  }


  setImage(image:any)
  {
    this.image = image;
  }
  getImage() 
  {
    return this.image
  }
}
