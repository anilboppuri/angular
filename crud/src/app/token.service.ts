import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class TokenService {

  constructor(private http: HttpClient) {}

  sendTokenRequest() {
    let jsonRequestBody: any = { username: 'foo', password: 'foo' };
    // for authentication to get token
    let url = 'http://localhost:8092/authenticate';
    this.http.post(url, jsonRequestBody, { responseType: 'text' as 'json' });
  }

  sendAuthRequest() {
    // for sending the token with get request
    const headers = new HttpHeaders().set('Authorization', "Bearer "+'token to be passed from component');
    //
    let url = 'http://localhost:8092/authorize';

    this.http.get(url, { headers, responseType: 'text' as 'json' });
  }
}
