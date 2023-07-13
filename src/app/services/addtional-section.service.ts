import { Injectable } from '@angular/core';
import { additionalSectionalType } from '../type/addtionalSectionalType';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { IdService } from './id.service';

@Injectable({
  providedIn: 'root'
})
export class AddtionalSectionService {
  
  addtionalSectionArray:additionalSectionalType[] = [];
  studentId:number = 0;
  id:number| undefined= 0;
  editId : number|undefined = 0;
  url ="http://localhost:8081/api/v1/additonalSection";
  constructor(private httpClient:HttpClient,private primaryKey:IdService) 
  { 

  }

  addSection(section:any)
  {
    const newSection = {
      ...section,
      id:this.editId,
      studentId: this.primaryKey.getId()
   };
   this.editId = 0;
   this.addtionalSectionArray.push(newSection);
  }
 
  removeSection(i:number)
  {
    this.id = this.addtionalSectionArray[i].id;
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
     this.addtionalSectionArray = this.addtionalSectionArray.filter(b => b != this.addtionalSectionArray[i]);
  }

  editSection(i:number)
  {
    this.editId = this.addtionalSectionArray[i].id;
    this.addtionalSectionArray = this.addtionalSectionArray.filter(b => b != this.addtionalSectionArray[i]);
  }

  setSection()
  {
    
    this.postSection(this.addtionalSectionArray);
   
  }

  postSection(education:any)
  {
    
    const url ="http://localhost:8081/api/v1/additonalSection/add";
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

  getSingleSection(i:number)
  {
    return this.addtionalSectionArray[i];
  }

  getSection()
  {
    return this.addtionalSectionArray;
  }

  getPostSection(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.studentId= this.primaryKey.getId();
      const url = `${this.url}/${this.studentId}`;
      this.httpClient.get(url).subscribe((response: any) => {
        this.addtionalSectionArray = response;
        console.log(this.addtionalSectionArray);
        resolve(this.addtionalSectionArray); 
      }, (error) => {
        reject(error);
      });
    });
  }

}
