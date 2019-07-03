import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from "@angular/http"
import { map } from 'rxjs/operators'
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  public listDirectores;
  constructor( public http: Http,public router: Router) { }

  ngOnInit() {
    this.http.get('http://dev.atypax.com/jkhan/api.php?function=users&role=1')
    .pipe(map(res => res)).subscribe((res)=> {
      var reS;
      reS = res;
      var data_body = JSON.parse(reS._body);
     this.listDirectores = data_body.data;
     
     console.log(this.listDirectores) 
     
    })
  }
  // disableSchool => http://dev.atypax.com/jkhan/api.php?function=disableschool&school={$idschool}
  // enableSchool => http://dev.atypax.com/jkhan/api.php?function=enableschool&school={$idschool}
  action(number,school){
    var urlService;
    if (number == 0) {
      urlService = 'http://dev.atypax.com/jkhan/api.php?function=enableschool&school='+school.school
    }else {
      urlService = 'http://dev.atypax.com/jkhan/api.php?function=disableschool&school='+school.school
    }
    console.log(urlService)
    this.http.get(urlService)
    .pipe(map(res => res)).subscribe((res)=> {
      console.log(res)
    })
  }

}
