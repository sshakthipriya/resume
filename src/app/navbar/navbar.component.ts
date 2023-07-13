import { Component, OnInit } from '@angular/core';
import { IdService } from '../services/id.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  id = 0;

  constructor(private idService: IdService,private router:Router) { }

  ngOnInit(): void {
    this.idService.id$.subscribe((id) => {
      this.id = id;
    });
  }
  logout() {
    this.router.navigate(['login']);
    setTimeout(function(){
      console.log("Called after");
     window.location.reload();
    },100);

  
  }
}
