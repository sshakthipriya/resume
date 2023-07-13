import { Component, ElementRef, ViewChild } from '@angular/core';
import { ResumeService } from '../services/resume.service';
import { educationType } from '../type/educationType';
import { skillType } from '../type/skillType';
import { workType } from '../type/workType';
import * as html2pdf from 'html2pdf.js';
import { headerType } from '../type/headerType';
import { Router } from '@angular/router';
import { additionalSectionalType } from '../type/addtionalSectionalType';
import { EditService } from '../services/edit.service';
@Component({
  selector: 'app-resume2',
  templateUrl: './resume2.component.html',
  styleUrls: ['./resume2.component.css']
})
export class Resume2Component {
  @ViewChild('pdfContent') pdfContent!: ElementRef;

  header:headerType|null;
  profile:string = '';
  education:educationType[] = [];
  skillArray:skillType[] = [];
  work:workType[] = [];
  additionSection:additionalSectionalType[] =[];
  selectedCategories:string[] = [];
  image:any;


  constructor(private resumeService:ResumeService,private router:Router,private editService:EditService) {
    this.header = resumeService.getHeader();
    this.profile = resumeService.getProfile();
    this.education = resumeService.getEducation();
    this.skillArray = resumeService.getSkills();
    this.work = resumeService.getWork();
    this.additionSection = resumeService.getSection();
    this.image = resumeService.getImage();
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
