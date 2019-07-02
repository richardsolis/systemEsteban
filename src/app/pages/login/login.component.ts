import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from "@angular/http"
import { map } from 'rxjs/operators'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor( public http: Http) { }
  public dataUser = {
    user:'',
    password:''
  }

  ngOnInit() {
  }

  onSubmit(event){
    console.log(this.dataUser)
    this.http.get('http://dev.atypax.com/jkhan/api.php?function=login&username=admin&password=123')
      .pipe(map(res => res)).subscribe(res => console.log(res));
    console.log('asdasdasd')
    event.preventDefault()
  }
}
