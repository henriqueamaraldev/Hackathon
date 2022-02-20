import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  keyId: any = "";

  body = {
    grant_type: "client_credentials",
    client_id: "g93tbd5lMYY2ikqkypcWTCt4RGidZ3OmjS15w7dLknY5PRxs",
    client_secret: "pi2kvPGy7QtB31zmqztDPmepgoTJzUYaT43Z1e4mpGu8Sd2A4zBzVImAIYqoIoqQ"
  };
  constructor(
    private http: HttpClient
  ) { }

  /*login(){
    let loginResponse = this.http.post('https://openapi.xpi.com.br/oauth2/v1/access-token', this.body, this.token).subscribe((data) => {
      this.keyId = data?['access_token'];
    })
    loginResponse = loginResponse?['access_token']
    this.keyId = loginResponse
  }*/

  token = {
    headers: new HttpHeaders().set('Authorization', this.keyId).append('Content-Type', 'application/json')
  }
  getAllUser(): Observable<User>{
    const param = {
      params: {limit: '100'}
    }
    const options = {
      ...this.token,
      ...param
    }
    return this.http.get<User>('https://openapi.xpi.com.br/openbanking/users', options);
  }



}
