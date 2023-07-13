import { Component, OnInit } from '@angular/core';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  name:String ="before";
  constructor(private homeService:HomeService) {
   this.name =  this.homeService.name;
   }

  ngOnInit(): void {
  }

}
