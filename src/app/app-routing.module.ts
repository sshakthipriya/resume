import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ImageComponent } from './image/image.component';
import { ProfileComponent } from './profile/profile.component';
import { EducationComponent } from './education/education.component';
import { SkillComponent } from './skill/skill.component';
import { WorkComponent } from './work/work.component';
import { AdditionalSectionComponent } from './additional-section/additional-section.component';
import { TemplateComponent } from './template/template.component';
import { ResumeComponent } from './resume/resume.component';
import { Resume2Component } from './resume2/resume2.component';
import { EditDetailsComponent } from './edit-details/edit-details.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'register',component:RegistrationComponent},
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'header',component:HeaderComponent},
  {path:'profile',component:ProfileComponent},
  {path:'education',component:EducationComponent},
  {path:'skill',component:SkillComponent},
  {path:'work',component:WorkComponent},
  {path:'resume1',component:ResumeComponent},
  {path:'resume2',component:Resume2Component},
  {path:'image',component:ImageComponent},
  {path:'template',component:TemplateComponent},
  {path:'additionalSectional',component:AdditionalSectionComponent},
  {path:'edit',component:EditDetailsComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
