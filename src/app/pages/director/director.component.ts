import { Component, OnInit } from '@angular/core';
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
  public listCourse;
  public listSecretarys;
  public usuarioCreate = {
    name: '',
    lastname: '',
    nameUser: '',
    password: '',
    password2: ''
  }
  constructor( public http: Http,public router: Router,public  session:SessionService) { }

  ngOnInit() {
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
     console.log(this.listSecretarys)
    })

    // http://dev.atypax.com/jkhan/api.php?function=createuser&firstname={$firstname}&lastname={$lastname}&school={$idschool}&username={$username}&password={$password}
    
  }

  createUser(){
    this.http.get("http://dev.atypax.com/jkhan/api.php?function=createuser&firstname=" +  this.usuarioCreate.name +"&lastname=" + this.usuarioCreate.lastname + "&school=" + this.session.getObject('user').data[0].school + "&username=" + this.usuarioCreate.nameUser + " &password=" + this.usuarioCreate.password)
    .pipe(map(res => res)).subscribe((res)=> {
      console.log(res)
    })
    console.log(this.usuarioCreate)
  }

}
