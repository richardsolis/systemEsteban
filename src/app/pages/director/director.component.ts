import { Component, OnInit , ViewChild, ElementRef} from '@angular/core';
import { Http, Response, Headers } from "@angular/http"
import { map } from 'rxjs/operators'
import { Router } from '@angular/router';
import {  SessionService } from '../../../providers/session.services'

@Component({
  selector: 'app-director',
  templateUrl: './director.component.html',
  styleUrls: ['./director.component.scss']
})

export class DirectorComponent implements OnInit {
  @ViewChild('btnClose') btnClose : ElementRef 
  public listCourse;
  public listSecretarys;
  public fieldsCourse;
  public usuarioCreate = {
    name: '',
    lastname: '',
    nameUser: '',
    password: '',
    password2: ''
  }

  public namegrades = { namegrades :[
    {name: 'prueba 6'}
  ]};
  public courseId;
  public course ;
  constructor( public http: Http,public router: Router,public  session:SessionService) { }

  ngOnInit() {
    // SERVICIO DE  GETCOURSE
    this.http.get('http://dev.atypax.com/jkhan/api.php?function=courses')
    .pipe(map(res => res)).subscribe((res)=> {
      var reS;
      reS = res;
      var data_body = JSON.parse(reS._body);
     this.listCourse = data_body.data;
     console.log(this.listCourse) 
    })

    // SERVICIO DE GETSECRETARIES
  this.http.get('http://dev.atypax.com/jkhan/api.php?function=users&role=2&school='+this.session.getObject('user').data[0].school)
    .pipe(map(res => res)).subscribe((res)=> {
      var reS;
      reS = res;
      var data_body = JSON.parse(reS._body);
     this.listSecretarys = data_body.data;
    })    
  }

  createUser(){
    this.http.get("http://dev.atypax.com/jkhan/api.php?function=createuser&firstname=" +  this.usuarioCreate.name +"&lastname=" + this.usuarioCreate.lastname + "&school=" + this.session.getObject('user').data[0].school + "&username=" + this.usuarioCreate.nameUser + " &password=" + this.usuarioCreate.password)
    .pipe(map(res => res)).subscribe((res)=> {
      this.btnClose.nativeElement.click();
      this.usuarioCreate = {
        name: '',
        lastname: '',
        nameUser: '',
        password: '',
        password2: ''
      }
      window.location.reload();
    })
  }

  viewCourse(course){
    this.courseId = course.id;
    this.http.get("http://dev.atypax.com/jkhan/api.php?function=gradescourse&school="+ this.session.getObject('user').data[0].school +"&course=" + course.id)
    .pipe(map(res => res)).subscribe((res)=> {
      var reS;
      reS = res;
      var data_body = JSON.parse(reS._body);
      this.fieldsCourse = data_body.data;
      console.log(data_body)
    })
    this.course = course.name
  }

  addField(){
    this.http.post("http://dev.atypax.com/jkhan/api.php?function=insertfieldsgrades&school="+ this.session.getObject('user').data[0].school + "&course=" + this.courseId,this.namegrades).pipe(map(res => res)).subscribe((res)=> {
      console.log(res)
    })
    
  }


}
