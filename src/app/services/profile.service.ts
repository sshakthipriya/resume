import { Injectable } from '@angular/core';
import { ResumeService } from './resume.service';
import { IdService } from './id.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private primaryKey:IdService,private httpclient:HttpClient) { }
  objective:string ="";
  url = "http://localhost:8081/api/v1/profile";
  id:number = 0;

  getPostObjective(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.id = this.primaryKey.getId();
      const url = `${this.url}/${this.id}`;
      this.httpclient.get(url).subscribe((response: any) => {
        this.objective = response.profile;
        console.log(this.objective);
        resolve(this.objective); 
      }, (error) => {
        reject(error);
      });
    });
  }

  setObjective(objective:string)
  {
      this.objective = objective;
      this.id = this.primaryKey.getId();
     
      const myProfile = {
        id: this.id,
        profile: this.objective
      };
      const url ="http://localhost:8081/api/v1/profile/add"
      this.httpclient.post(url,myProfile).subscribe((response:any)=>
      {
        console.log(response);
      },
      (error:any)=>
      {
        console.log(error);
      });
      
  }

  
  getObjective()
  {
    return this.objective;
  }
  
}
