import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorComponent } from './error/error.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BannerComponent } from './index/banner/banner.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SectionsComponent } from './index/sections/sections.component';
import { FooterComponent } from './footer/footer.component';
import { AboutMeComponent } from './index/sections/about-me/about-me.component';
import { EducationComponent } from './index/sections/education/education.component';
import { SkillsComponent } from './index/sections/skills/skills.component';
import { ExperienceComponent } from './index/sections/experience/experience.component';
import { ProyectsComponent } from './index/sections/proyects/proyects.component';
import { ContactComponent } from './index/sections/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    DashboardComponent,
    ErrorComponent,
    NavbarComponent,
    BannerComponent,
    SidebarComponent,
    SectionsComponent,
    FooterComponent,
    AboutMeComponent,
    EducationComponent,
    SkillsComponent,
    ExperienceComponent,
    ProyectsComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
