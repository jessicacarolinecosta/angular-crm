import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

const url = 'http://localhost:3000/api/v1/lead/';

@Injectable({
  providedIn: 'root'
})
export class LeadService {
  headers = new HttpHeaders().set('x-access-token', localStorage.getItem('token'));

  constructor(private http: HttpClient) { }

  insert(name: string, email: string, phone: string, state: string, city: string, obs: string): Observable<any> {
    let headers = new HttpHeaders().set('x-access-token', localStorage.getItem('token'));

    const params = {
      name: name,
      email: email,
      phone: phone,
      state: state, 
      city: city,
      obs: obs
    };

    return this.http.post(url + 'create', params, {
      headers: this.headers
    });
  }

  list(): Observable<any> {
    return this.http.post(url + 'list', {}, {
      headers: this.headers
    });
  }
}
