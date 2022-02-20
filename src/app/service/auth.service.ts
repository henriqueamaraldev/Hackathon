import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  keyId: string ="";

  constructor(
    private http: HttpClient
  ) { }

  

  token = {
    headers: new HttpHeaders().set('Authorization', this.keyId)
  }

  getAllUser(): Observable<User>{
    return this.http.get<User>('https://openapi.xpi.com.br/openbanking/users', this.token);
  }
  



}
