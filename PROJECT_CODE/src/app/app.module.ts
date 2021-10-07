import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatCardModule } from '@angular/material/card';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactFormButtonComponent } from './contact-form-button/contact-form-button.component';
import { MatDialogModule } from '@angular/material/dialog';
import { AboutSectionComponent } from './about-section/about-section.component';
import { HomeSectionComponent } from './home-section/home-section.component';
import { ProjectsSectionComponent } from './projects-section/projects-section.component';





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContactFormComponent,
    ContactFormButtonComponent,
    AboutSectionComponent,
    HomeSectionComponent,
    ProjectsSectionComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatSlideToggleModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
