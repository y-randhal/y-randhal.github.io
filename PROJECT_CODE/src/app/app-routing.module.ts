import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutSectionComponent } from './about-section/about-section.component';
import { HomeSectionComponent } from './home-section/home-section.component';
import { ProjectsSectionComponent } from './projects-section/projects-section.component';

const routes: Routes = [
  { path: '', component: HomeSectionComponent },
  { path: 'about-section', component: AboutSectionComponent },
  { path: 'projects-section', component: ProjectsSectionComponent },
  { path: 'projects-section', component: ProjectsSectionComponent }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
