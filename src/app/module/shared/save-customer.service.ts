import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CustomerFullDetails } from 'app/model/CustomerFullDetails.model';

@Injectable({
  providedIn: 'root'
})
export class SaveCustomerService {

  constructor(private http: HttpClient) { }

  url="http://localhost:8084/disbursement/calculateEMI";

  saveCustomer(customer :CustomerFullDetails)
  {
    console.log("Enter In to Component.ts"+customer)
    return this.http.post(this.url,customer);
  }

}
