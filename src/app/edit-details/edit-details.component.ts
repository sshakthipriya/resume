import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EditService } from '../services/edit.service';


@Component({
  selector: 'app-edit-details',
  templateUrl: './edit-details.component.html',
  styleUrls: ['./edit-details.component.css']
})
export class EditDetailsComponent {

  constructor(private router:Router,private editService:EditService)
  {

  }
  selectedCategories: string[] = [];

  onCategorySelected(category: string): void {
      const index = this.selectedCategories.indexOf(category);
      if (index > -1) {
          this.selectedCategories.splice(index, 1);
      } else {
          this.selectedCategories.push(category);
      }
  }

  save()
  {
    console.log(this.selectedCategories);
    this.editService.setSelectedCategories(this.selectedCategories);
    this.router.navigate(['template']);
  }

  ngOnInit()
  {
    this.selectedCategories = this.editService.getSelectedCategories();
  }
  

}
