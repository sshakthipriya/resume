import { Injectable } from '@angular/core';
import { workType } from '../type/workType';
import { ResumeService } from './resume.service';
import { HttpClient } from '@angular/common/http';
import { IdService } from './id.service';

@Injectable({
  providedIn: 'root'
})
export class WorkService {
  workArray:workType[] =[];
  url ="http://localhost:8081/api/v1/workDetails";
  studentId:number = 0;
  id:number| undefined= 0;
  editId : number|undefined = 0;
  constructor(private httpClient:HttpClient,private primaryKey:IdService) { }

  addWork(work:any)
  { const newWork = {
    ...work,
    id:this.editId,
    studentId: this.primaryKey.getId()
 };
 this.editId = 0;
 this.workArray.push(newWork);
  }
  getWork()
  {
    return this.workArray;
  }
  removeWork(i:number)
  {

    this.id = this.workArray[i].id;
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
     this.workArray = this.workArray.filter(b => b != this.workArray[i]);
  }

  editWork(i : number)
  {
    this.editId = this.workArray[i].id;
    this.workArray = this.workArray.filter(b => b != this.workArray[i]);
  }


  getSingleWork(i:number)
  { 
    return this.workArray[i];
  }
  setWork()
  {
    this.postWork(this.workArray);
    
  }
  postWork(workList:any)
  {
    const url ="http://localhost:8081/api/v1/workDetails/add";
    this.httpClient.post(url,workList).subscribe(
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
  getPostWork(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.studentId= this.primaryKey.getId();
      const url = `${this.url}/${this.studentId}`;
      this.httpClient.get(url).subscribe((response: any) => {
        this.workArray = response;
        console.log(this.workArray);
        resolve(this.workArray); 
      }, (error) => {
        reject(error);
      });
    });
  }

}
