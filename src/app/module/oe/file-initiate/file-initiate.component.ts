import { Component, OnInit } from '@angular/core';
import { LoanDetails } from 'app/model/LoanDetails.model';
import { LoanDetailsService } from 'app/module/shared/loan-details.service';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-file-initiate',
  templateUrl: './file-initiate.component.html',
  styleUrls: ['./file-initiate.component.css']
})
export class FileInitiateComponent implements OnInit {

  constructor(public loanServ:LoanDetailsService) { }

  loandetails: LoanDetails[];

  ngOnInit(): void {

    this.loanServ.getLoanDetails().subscribe((data:any)=>{
      this.loandetails=data;
       });

}

mainform=true
subform=false
formLoan:LoanDetails

currentDate= new Date();

onClick(loanId)
{

  this.mainform=false
  this.subform=true

  this.loandetails.forEach(loan =>
    {
      if(loan.loanId==loanId)
      {
        this.formLoan=loan
      }

     });

}

generatePDF()
{
  this.mainform=true
  this.subform=false

  var data = document.getElementById('sanctionLetter');
  html2canvas(data).then(canvas => {
  // Few necessary setting options
  var imgWidth = 210;
  var pageHeight = 297;
  var imgHeight = canvas.height * imgWidth / canvas.width;
  var heightLeft = imgHeight;

  const contentDataURL = canvas.toDataURL('image/png')
  let pdf = new jsPDF('p', 'mm', 'a4'); // A4 size page of PDF
  var position = 0;
  pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
  pdf.save(this.formLoan.customerData.custName+'_SanctionLetter.pdf'); // Generated PDF
  });


}


proceedNow(loanid)
{
  console.log("In PRocessed MEthod"+loanid)
  this.loandetails.forEach(loan =>
    {
      if(loan.loanId==loanid)
      {
        var loan:LoanDetails=loan

        loan.customerData.status='Approved'
        loan.status='ReadyToDisburse';
        loan.remark='InDisbursementState'

        this.loanServ.updateLoanDetails(loan).subscribe()

      }

     });

}

}

