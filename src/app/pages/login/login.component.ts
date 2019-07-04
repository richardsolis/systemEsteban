import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from "@angular/http"
import { map } from 'rxjs/operators'
import { Router } from '@angular/router';
import {  SessionService } from '../../../providers/session.services'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor( public http: Http,public router: Router, public  session:SessionService) { }
  public dataUser = {
    user:'',
    password:''
  }
  public data;

  ngOnInit() {
  }

  // ROLES 
  // 1 = ADMIN
  // 2 = DIRECTOR

  onSubmit(event){
    console.log(this.dataUser)
    this.http.get('http://dev.atypax.com/jkhan/api.php?function=login&username='+this.dataUser.user+'&password='+this.dataUser.password)
      .pipe(map(res => res)).subscribe((res)=> {
       this.data = res;
       var data_body = JSON.parse(this.data._body);
       console.log(res) 
       this.session.setObject('user',data_body)
       var rol = data_body.data[0].role;
       if (rol == 1) {
        this.router.navigate(['/admin']);
       }else if(rol == 2){
        this.router.navigate(['/director']);
       }else if (rol == 3) {
         this.router.navigate(['/secretary'])
       }
       console.log(res) 
       
      })
      event.preventDefault()
  }
}
