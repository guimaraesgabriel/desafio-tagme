import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  ambiente = "DEV";
  // ambiente = "HOM";
  // ambiente = "PROD";

  API_URL = "";
  IMG_URL = "";
  FILE_URL = "";
  endPoint = "";

  constructor(private http: HttpClient) {
    if (this.ambiente === "DEV") {
      this.API_URL = "https://localhost:44301/";
    } else if (this.ambiente === "HOM") {
      this.API_URL = "";
    } else {
      this.API_URL = "";
    }

    this.IMG_URL = this.API_URL + "assets/imgs/";
    this.FILE_URL = this.API_URL + "assets/";
  }
}
