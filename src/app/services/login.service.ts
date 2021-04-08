import { ConfigService } from './config.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private endPoint = "user/";

  constructor(
    private http: HttpClient,
    private config: ConfigService
  ) { }

  login(obj) {
    return this.http.post(this.config.API_URL + this.endPoint + "login", obj).toPromise();
  }
}
