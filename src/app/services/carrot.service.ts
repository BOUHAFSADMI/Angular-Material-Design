import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class CarrotService {

  constructor(private http: HttpClient) {
  }

  getCarrots() {
    return this.http.get('http://cdn.iamsap.com/courses/2017-angular2-material/carrots/carrots.json');
  }
}

