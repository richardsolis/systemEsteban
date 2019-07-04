import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from "@angular/http"
import { map } from 'rxjs/operators'
import { Router, ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {  SessionService } from '../../../../providers/session.services'

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  public listStudents;
  public edit = false;
  constructor(public http: Http,public router: Router,public _router: ActivatedRoute, private _location: Location, public  session:SessionService) { }

  ngOnInit() {
    this.http.get('http://dev.atypax.com/jkhan/api.php?function=gradesstudents&school='+this.session.getObject('user').data[0].school+'&course='+this._router.snapshot.params['id'])
    .pipe(map(res => res)).subscribe((res)=> {
      var reS;
      reS = res;
      var data_body = JSON.parse(reS._body);
      this.listStudents = data_body.data
     console.log(this.listStudents) 
    })
  }

  goBack(){
    this._location.back();
  }

  editNota() {
    this.edit = true;
  }

}
