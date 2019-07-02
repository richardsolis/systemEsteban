import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { AdminComponent } from './pages/admin/admin.component';
import { SecretaryComponent } from './pages/secretary/secretary.component';
import { DirectorComponent } from './pages/director/director.component';
import { CourseComponent } from './pages/secretary/course/course.component';
import { CourseIComponent } from './pages/director/course-i/course-i.component';
import { SecretaryIComponent } from './pages/director/secretary-i/secretary-i.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    SecretaryComponent,
    DirectorComponent,
    CourseComponent,
    CourseIComponent,
    SecretaryIComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
