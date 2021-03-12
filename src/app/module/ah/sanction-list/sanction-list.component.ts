import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { LoanDisbursementMaster } from 'app/model/LoanDisbursementMaster.model';
import { LoanDetails } from 'app/model/LoanDetails.model';
import { DisbursementMasterService } from 'app/module/shared/disbursement-master.service';
import { LoanDetailsService } from 'app/module/shared/loan-details.service';

@Component({
  selector: 'app-sanction-list',
  templateUrl: './sanction-list.component.html',
  styleUrls: ['./sanction-list.component.css']
})
export class SanctionListComponent implements OnInit {

  constructor(public LoanDetails:LoanDetailsService,private fb:FormBuilder,private disServ:DisbursementMasterService) { }


  public formLoan:LoanDetails

  loandetails: LoanDetails[];

  ngOnInit(): void
  {
    this.LoanDetails.getLoanDetails().subscribe((data:any)=>{
      this.loandetails=data;
       });
  }

  id:number=1;

  callbackend()
  {

    this.formLoan.status='Disburse'
    this.formLoan.remark='Amount disbursed'
    this.id++;
     this.disbursmentForm=
     {
      "loanDisbursementMasterId":this.id,
      "accountNumber":this.formLoan.customerData.quotation.dealerDetails.bankDetails.bankaccountNumber,
      "accountType":this.formLoan.customerData.quotation.dealerDetails.bankDetails.accountType,
      "amountPayType":this.payType,
      "amountPaidDate":this.payDate,
      "bankName":this.formLoan.customerData.quotation.dealerDetails.bankDetails.bankAccountHolderName,
      "paymentStatus":'Disburse',
      "totalLoanAmount":this.formLoan.loanAmount,
      "transferAmount":this.formLoan.loanAmount,
      "loandata":this.formLoan

     }

     this.disServ.saveDisbursement(this.disbursmentForm).subscribe();

     this.formMain=true;
      this.formSub=false;
  }

  formMain=true;
  formSub=false;
  payType:string;
  payDate:Date;
  disbursmentForm:LoanDisbursementMaster;

payNow(loanid:number)
{

  this.formMain=false;
  this.formSub=true;

  this.loandetails.forEach(loan =>
    {
      if(loan.loanId==loanid)
      {
        this.formLoan=loan
      }

     });
}

}

