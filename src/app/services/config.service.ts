import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  ambiente = "DEV";
  // ambiente = "HOM";
  // ambiente = "PROD";

  API_URL = "";
  IMG_URL = "";
  endPoint = "";

  constructor(private http: HttpClient) {
    if (this.ambiente === "DEV") {
      this.API_URL = "http://localhost:8001/";
    } else if (this.ambiente === "HOM") {
      this.API_URL = "";
    } else if (this.ambiente === "PROD") {
      this.API_URL = "";
    }

    this.IMG_URL = this.API_URL + "assets/imgs/";
  }

  public getAll(collection) {
    return this.http.get(this.API_URL + collection).toPromise();
  }

  public get(collection, id) {
    return this.http.get(this.API_URL + collection + id).toPromise();
  }

  public post(collection, obj) {
    return this.http.post(this.API_URL + collection, obj).toPromise();
  }

  public delete(collection, id) {
    return this.http.delete(this.API_URL + collection + id).toPromise();
  }
}

