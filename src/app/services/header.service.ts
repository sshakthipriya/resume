
import { Injectable } from '@angular/core';
import { headerType } from '../type/headerType';
import { ResumeService } from './resume.service';
import { IdService } from './id.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  id:number = 0;
  postheader :headerType | null = null;
   url = "http://localhost:8081/api/v1/personalDetails";
   constructor(private primaryKey:IdService, private httpclient:HttpClient) {
    
  }
  getPostHeader(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.id = this.primaryKey.getId();
      const url = `${this.url}/${this.id}`;
      this.httpclient.get(url).subscribe((result: any) => {
        this.postheader = result;
        console.log(this.postheader);
        resolve(result); // resolve the Promise with the result
      }, (error) => {
        console.error(error);
        reject(error); // reject the Promise with an error
      });
    });
  }
  
  setHeader(header:any)
  {
   
    this.postheader = header;
    
    this.saveHeader(this.postheader).subscribe(
      (response:any) =>
      {
        console.log(response);
      }
    )
    

  }
  getHeader()
  {
    
    return this.postheader;
  }

  saveHeader(header:any)
  {
   
      if(this.postheader == null)
      {
        this.postheader = {

          id :  this.primaryKey.getId(),
          firstName : header.firstName,
          lastName : header.lastName,
          email : header.email,
          jobTitle : header.jobTitle,
          phoneNumber : header.phoneNumber,
        }
      }
      else
      {
         this.postheader.id = this.primaryKey.getId();
         this.postheader.firstName = header.firstName;
         this.postheader.lastName =  header.lastName;
         this.postheader.email = header.email;
         this.postheader.jobTitle = header.jobTitle;
         this.postheader.phoneNumber = header.phoneNumber;
      }
      const url ="http://localhost:8081/api/v1/personalDetails/add";
      return  this.httpclient.post(url,this.postheader);
  }

 
}
