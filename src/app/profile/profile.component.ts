import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators,} from '@angular/forms';
import { Router } from '@angular/router';
import { ProfileService } from '../services/profile.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  
  profile = new FormGroup({
    objective:new FormControl('',[Validators.required]),
  })
  
  postobjective ="";
  
  constructor(private router:Router,private profileService:ProfileService)
  {
     this.loadProfile();
  }
  async loadProfile()
  {
    this.postobjective = await this.profileService.getPostObjective();
    this.profile.setValue({
      objective:this.postobjective
    })
  }
  navigate()
  {
    this.router.navigate(['image']);
  }
  back()
  {
    this.router.navigate(['header']);
  }
  submit()
  {
    if(this.profile.value.objective != null && this.profile.value.objective != undefined)
    {
      this.profileService.setObjective(this.profile.value.objective);
    }
    
    this. navigate();
  }


}
