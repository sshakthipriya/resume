import { Component, ViewChild } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ImageService } from '../services/image.service';
@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent {
  constructor(private imageService:ImageService,private router:Router)
  {
    
  }
  image = new FormGroup(
    {
       file: new FormControl('',Validators.required)
    }
  )

  
  onFileSelected(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.imageService.image = reader.result;
    };
  }

  navigate()
  {
    this.router.navigate(['education']);
  }
  back()
  {
    this.router.navigate(['profile']);
  }
  submit()
  {
    console.log(this.image.value);
    this.imageService.setImage();
   
    this.navigate();
  }
}
