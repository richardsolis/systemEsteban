import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from "@angular/http"
import { map } from 'rxjs/operators'
import { Router, ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  public listCourse;
  constructor(public http: Http,public router: Router,public _router: ActivatedRoute, private _location: Location) { }

  ngOnInit() {
    console.log(this._router.snapshot.params['id'])
  }

  goBack(){
    this._location.back();
  }

}
