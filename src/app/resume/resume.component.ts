import { Component, ViewChild, ElementRef } from '@angular/core';
import { headerType } from '../type/headerType';
import { ResumeService } from '../services/resume.service';
import { educationType } from '../type/educationType';
import { skillType } from '../type/skillType';
import { workType } from '../type/workType';
import * as html2pdf from 'html2pdf.js';
import { Router } from '@angular/router';
import { additionalSectionalType } from '../type/addtionalSectionalType';
import { EditService } from '../services/edit.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {
  @ViewChild('pdfContent') pdfContent!: ElementRef;

  header: headerType | null = null;
  profile:string = '';
  education:educationType[] = [];
  skillArray:skillType[] = [];
  work:workType[] = [];
  additionSection:additionalSectionalType[] = [];
  selectedCategories:string[] = [];
  constructor(private resumeService:ResumeService,private router:Router,private editService:EditService){
    this.header = this.resumeService.getHeader() || null;
    this.profile = this.resumeService.getProfile() || '';
    this.education = this.resumeService.getEducation() || [];
    this.skillArray = this.resumeService.getSkills() || [];
    this.work = this.resumeService.getWork() || [];
    this.additionSection = this.resumeService.getSection() || [];
    this.selectedCategories = this.editService.getSelectedCategories();
    
  }

 
  generatePdf(): void {
    const options = {
      filename: 'my-resume.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
    };
    
    html2pdf().from(this.pdfContent.nativeElement).set(options).save();
  }
  navigate()
  {
    this.router.navigate(['template']);
  }
  back()
  {
    this.navigate();
  }
}