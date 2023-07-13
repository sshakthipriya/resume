import { Injectable } from '@angular/core';
import { ResumeService } from './resume.service';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private resumeService:ResumeService) { }
  image:any;
  getImage()
  {
    return this.image;
  }
  setImage()
  {
     this.resumeService.setImage(this.image);
  }
  
}
