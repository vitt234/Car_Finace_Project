import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoanDisbursementMaster } from 'app/model/LoanDisbursementMaster.model';

@Injectable({
  providedIn: 'root'
})
export class DisbursementMasterService {

  constructor(private http:HttpClient) { }

  url='http://localhost:8084/disbursement/saveLoanDis';

  urlGet='http://localhost:8084/disbursement/getLoanDis'

  saveDisbursement(disbursement:LoanDisbursementMaster)
  {
    return this.http.post(this.url,disbursement)

  }

  getDisbursementList()
  {
    return this.http.get(this.urlGet)
  }

}
