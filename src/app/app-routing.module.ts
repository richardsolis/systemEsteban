import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Login
import { LoginComponent } from './pages/login/login.component';

// ROL ADMINISTRADOR
import { AdminComponent } from './pages/admin/admin.component';

//  ROL SECRETARIO
import { SecretaryComponent } from './pages/secretary/secretary.component'
import { CourseComponent } from './pages/secretary/course/course.component'

// ROL DIRECTOR
import { DirectorComponent } from './pages/director/director.component';
import { SecretaryIComponent } from './pages/director/secretary-i/secretary-i.component';
import { CourseIComponent } from './pages/director/course-i/course-i.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent},

  { path: 'admin', component: AdminComponent},

  { path: 'secretary',component: SecretaryComponent}, 
  { path: 'secretary/course/:id',component: CourseComponent}, 

  {path: 'director', component: DirectorComponent,},
  {path: 'director/secretary', component: SecretaryIComponent,},
  {path: 'director/course', component: CourseIComponent,},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
