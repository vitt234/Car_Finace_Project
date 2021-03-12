import { Customer } from './../../model/Customer';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CityServiceService {
//Zull URL
  //url:string='http://desktop-stmnv1m:8082/getMaster/master/getlist';
   url:string = 'http://localhost:8083/master/getlist';

  constructor(private http: HttpClient) { }

  getCity()
  {
    return this.http.get(this.url);
  }



}
