import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  constructor(private httpClient:HttpClient ) { }
  url:string ="http://localhost:8081/api/v1/customer/add";

  saveUser(data:any)
  {
    return this.httpClient.post(this.url,data);
  }
}
