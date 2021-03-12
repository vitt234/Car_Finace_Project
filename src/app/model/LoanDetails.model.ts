import { CustomerFullDetails } from "./CustomerFullDetails.model";

export class LoanDetails {
  loanId: number;

  loanAmount: number;
  rateOfInterest: number;
  processingFees: number;
  sanctionDate: Date;
  insurance: number;
  remark: string;
  status: string;
  emi: number;
  totalloaninterest:number;
  totalamountpaid:number;

  customerData: CustomerFullDetails;

}
