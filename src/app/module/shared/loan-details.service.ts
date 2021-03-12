import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoanDetails } from 'app/model/LoanDetails.model';

@Injectable({
  providedIn: 'root'
})
export class LoanDetailsService {

  url = 'http://localhost:8084/disbursement/getAllLoanDetails';

  urlUpdate='http://localhost:8084/disbursement/saveLoanDetails'


  constructor(private http: HttpClient) { }

  getLoanDetails()
  {
    return this.http.get(this.url);
  }

  updateLoanDetails(loan:LoanDetails)
  {
    console.log("In Loan Service :"+loan.status)
    return this.http.post(this.urlUpdate,loan)
  }
}
