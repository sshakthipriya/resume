import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor() { }
  name:String = "empty";

  getname(name:string)
  {
    this.name = name;
  }

}
