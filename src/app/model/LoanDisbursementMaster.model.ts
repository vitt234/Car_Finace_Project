import { LoanDetails } from "./LoanDetails.model";

export class LoanDisbursementMaster
{
  loanDisbursementMasterId:number;

  loandata:LoanDetails;

  amountPayType:string;
  totalLoanAmount:number;
  bankName:string;
  accountNumber:string;
  accountType:string;
  transferAmount:number;
  paymentStatus:string;
  amountPaidDate:Date;
}
