import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginRegisterService {

  constructor(private readonly httpClient: HttpClient) { }
  public login(email: string, pass: string): Observable<any> {
    const body = {
      username: email,
      password: pass
    }
    return this.httpClient.post<any>('https://cms.getspaceshuttle.com/api/auth/signin', body);
  }
  public register(fName: string, lName: string, mNumber:string, emailAddress: string, pass: string, confirmPass: string): Observable<any> {
    const body = {
      firstName: fName,
      lastName: lName,
      email: emailAddress,
      phone: mNumber,
      password: pass,
      confirmPassword: confirmPass,
      type: 'TCO'
    }
    return this.httpClient.post<any>('https://cms.getspaceshuttle.com/api/auth/signup', body);
  }
}
