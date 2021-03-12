import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CustomerFullDetails } from 'app/model/CustomerFullDetails.model';

@Injectable({
  providedIn: 'root'
})
export class UpdateCustomerService {

  constructor(private http: HttpClient) { }

  url="http://localhost:8084/disbursement/updateCustomer";

  updateCustomer(customer:CustomerFullDetails )
  {
    console.log("Customer in Service "+customer.cumstomerIntimation)
      return this.http.post(this.url,customer);
  }
}
