// import { Injectable } from '@angular/core';
// import { Observable } from "rxjs/Rx"
// import { Http, Response, Headers } from "@angular/http"
// import { environment as ENV } from '../../environments/environment';
// @Injectable()
// export class AuthenticationProvider {

//   constructor(
//     public http: Http
//   ) {
//   }
// authenticateUser(user: string, pass: string) {
//     const body = { username: user, password: pass, tokendevice: '-' };
//     const headers = new Headers(ENV.WS_AULA.Headers);
//     return this.http.post('local_wsluciapp_login', body, { headers: headers }).map((res: Response) => res.json())
//   }
// }