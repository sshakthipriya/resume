import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private HttpClient:HttpClient ) { }
  url:string = "http://localhost:8081/api/v1/customer";

  checkUser(email:any,password:any)
  {
     const url = `${this.url}/${email}/${password}`;
     return this.HttpClient.get(url);
  }
}
