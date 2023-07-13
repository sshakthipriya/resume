import { Injectable } from '@angular/core';
import { ProfileComponent } from '../profile/profile.component';
import { ProfileService } from './profile.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
   profile:string="";
  constructor(private profileService : ProfileService) {
    
   }

   async profileLoader()
   {
    this.profile = await this.profileService.getPostObjective();
    return this.profile;
   }
}
