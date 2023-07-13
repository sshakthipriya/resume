import { Injectable } from '@angular/core';
import { skillType } from '../type/skillType';
import { ResumeService } from './resume.service';
import { IdService } from './id.service';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SkillService {
 skills:skillType[] = [];
 studentId:number = 0;
 id:number = 0;
 editId:number = 0;

 url ="http://localhost:8081/api/v1/skillsDetails"
  constructor(private primaryKey:IdService,private httpClient : HttpClient ) { }

  addSkill(skill:any)
  {
    const newSkill: skillType = {
      ...skill,
      id : this.editId,
      studentId : this.primaryKey.getId(),
    };
    this.editId = 0;
    console.log(newSkill.id);
    this.skills.push(newSkill);
  }
  getSkill()
  {
    return this.skills;
  }
  removeSkill(i:number)
  {
    this.id = this.skills[i].id;
    const url = `${this.url}/delete/${this.id}`;
    if(this.id != undefined && this.id != 0)
    {
      this.httpClient.delete(url).subscribe((response:any) =>
      {
        console.log(response);
      },
      (error)=>
      {
        console.log(error);
      })
    }
     this.skills = this.skills.filter(b => b != this.skills[i]);
    
  }
  editSkill(i:number)
  {
     this.editId = this.skills[i].id;
     this.skills = this.skills.filter(b => b != this.skills[i]);
  }

  getSingleSkill(i:number)
  { 
    return this.skills[i];
  }
  setSkills()
  {
    this.postSkills(this.skills);
    
  }

  postSkills(skillsList:any)
  {
   const url ="http://localhost:8081/api/v1/skillsDetails/add"
    this.httpClient.post(url,skillsList).subscribe(
      (response:any)=>
      {
        console.log(response);
      },
      (error:any)=>
      {
        console.log(error);
      }
      )
  }

  getPostSkill(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.studentId= this.primaryKey.getId();
      const url = `${this.url}/${this.studentId}`;
      this.httpClient.get(url).subscribe((response: any) => {
        this.skills = response;
        console.log(this.skills);
        resolve(this.skills); 
      }, (error) => {
        reject(error);
      });
    });
  }
}
