import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

const url = 'http://localhost:3000/api/v1/user/';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  login(login: string, password: string): Observable<any> {

    const params = {
      login: login,
      password: password
    };

    return this.http.post(url + 'login', params);
  }
}
