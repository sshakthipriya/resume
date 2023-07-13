import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule,ReactiveFormsModule }  from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from './header/header.component';
import { ResumeComponent } from './resume/resume.component';
import { ProfileComponent } from './profile/profile.component';
import { EducationComponent } from './education/education.component';
import { SkillComponent } from './skill/skill.component';
import { WorkComponent } from './work/work.component';
import { Resume2Component } from './resume2/resume2.component';
import { ImageComponent } from './image/image.component';
import { TemplateComponent } from './template/template.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { AdditionalSectionComponent } from './additional-section/additional-section.component';
import { EditDetailsComponent } from './edit-details/edit-details.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    HeaderComponent,
    ResumeComponent,
    ProfileComponent,
    EducationComponent,
    SkillComponent,
    WorkComponent,
    Resume2Component,
    ImageComponent,
    TemplateComponent,
    AdditionalSectionComponent,
    EditDetailsComponent,
  ],
  imports: [
    NgxSpinnerModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
