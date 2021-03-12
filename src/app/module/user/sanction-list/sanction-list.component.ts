import { Component, OnInit } from '@angular/core';
import { CustomerFullDetails } from 'app/model/CustomerFullDetails.model';
import { LoanDetails } from 'app/model/LoanDetails.model';
import { LoanDetailsService } from 'app/module/shared/loan-details.service';
import { UpdateCustomerService } from 'app/module/shared/update-customer.service';

@Component({
  selector: 'app-sanction-list',
  templateUrl: './sanction-list.component.html',
  styleUrls: ['./sanction-list.component.css']
})
export class SanctionListComponent implements OnInit {

  constructor(public loanServ:LoanDetailsService,private updateCustServ:UpdateCustomerService ) { }

  loandetails: LoanDetails[];

  ngOnInit(): void {

    this.loanServ.getLoanDetails().subscribe((data:any)=>{
      this.loandetails=data;
       });

}

isDisble=false

disagreeButton(custId)
{
  this.isDisble=true
  this.loandetails.forEach(loan =>
 {
   if(loan.customerData.custId==custId)
   {
     var customer:CustomerFullDetails=loan.customerData;
     customer.cumstomerIntimation='Disagree';
     this.updateCustServ.updateCustomer(customer);

   }

  });

}

agreeButton(custId)
{
  this.isDisble=true
  console.log("In Agree Function "+custId)
  this.loandetails.forEach(loan =>
    {
      if(loan.customerData.custId==custId)
      {
        console.log("In If Block "+loan.customerData.custId)
        var customer:CustomerFullDetails=loan.customerData;

        console.log("In if Before update  "+customer.cumstomerIntimation)
        customer.cumstomerIntimation='Agree';

        console.log("In if after update  "+customer.cumstomerIntimation)
        this.updateCustServ.updateCustomer(customer).subscribe()


      }

     });
}

}
