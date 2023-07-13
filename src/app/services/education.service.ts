import { Injectable } from '@angular/core';
import { educationType } from '../type/educationType';
import { ResumeService } from './resume.service';
import { HttpClient } from '@angular/common/http';
import { IdService } from './id.service';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  constructor(private httpClient:HttpClient,private primaryKey:IdService) { }
  educationArray:educationType[] = [];
  url ="http://localhost:8081/api/v1/educationalDetails";
  studentId:number = 0;
  id:number| undefined= 0;
  editId : number|undefined = 0;
  addEducation(education:any)
  {
     
     const newEducation = {
        ...education,
        id:this.editId,
        studentId: this.primaryKey.getId()
     };
     this.editId = 0;
     this.educationArray.push(newEducation);
  }
  
  getEducation()
  {
    return this.educationArray;
  }
  removeEducation(i:number)
  {
    this.id = this.educationArray[i].id;
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
     this.educationArray = this.educationArray.filter(b => b != this.educationArray[i]);
  }

  editEducation(i : number)
  {
    this.editId = this.educationArray[i].id;
    this.educationArray = this.educationArray.filter(b => b != this.educationArray[i]);
  }
  getSingleEducation(i:number)
  { 
    return this.educationArray[i];
  }
  setEducation()
  {
    
    this.postEducation(this.educationArray);
   
  }
  postEducation(education:any)
  {
    
    const url ="http://localhost:8081/api/v1/educationalDetails/add";
    this.httpClient.post(url,education).subscribe(
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
  getPostEducation(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.studentId= this.primaryKey.getId();
      const url = `${this.url}/${this.studentId}`;
      this.httpClient.get(url).subscribe((response: any) => {
        this.educationArray = response;
        console.log(this.educationArray);
        resolve(this.educationArray); 
      }, (error) => {
        reject(error);
      });
    });
  }

}
