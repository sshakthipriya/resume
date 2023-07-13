import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EditService {

  constructor() { }
  selectedCategories = ['header', 'profile', 'image', 'education', 'skills', 'work', 'addtionalSection'];


  setSelectedCategories(selectedCategories:any)
  {
    this.selectedCategories = selectedCategories;
  }
  getSelectedCategories()
  {
    return this.selectedCategories;
  }
}
