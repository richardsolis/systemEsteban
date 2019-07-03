import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from "@angular/http"
import { map } from 'rxjs/operators'
import { Router} from '@angular/router';
import {  SessionService } from '../../../providers/session.services'

@Component({
  selector: 'app-secretary',
  templateUrl: './secretary.component.html',
  styleUrls: ['./secretary.component.scss']
})
export class SecretaryComponent implements OnInit {
  public listCourse;
  constructor(public http: Http,public router: Router, public session:SessionService) { }

  ngOnInit() {
    this.http.get('http://dev.atypax.com/jkhan/api.php?function=courses')
    .pipe(map(res => res)).subscribe((res)=> {
      var reS;
      reS = res;
      var data_body = JSON.parse(reS._body);
     this.listCourse = data_body.data;
     console.log(this.listCourse) 
    })
  }

  goCourse(course) {
    this.session.setObject('courseSecreary',course)
    console.log(course)
    this.router.navigate(['/secretary/course',course.id]);
    // [routerLink]="['/product',product.id]")
  }

}
