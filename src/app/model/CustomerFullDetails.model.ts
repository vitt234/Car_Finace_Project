import { AddressDetails } from "./addressDetails.model";
import { CarQuotationDetails } from "./CarQuotationDetails.model";
import { ContactDetails } from "./ContactDetails.model";

export class CustomerFullDetails{

  custId: number;
  custName: string;
  localAddress: AddressDetails;
  permentAddress: AddressDetails;
  contactDetails: ContactDetails;
  pancardNo: string;
  adharcardNo: string;
  natureOfOccupation: string;
  gender: string;
  dob: Date;
  cumstomerIntimation: string;
  customerSalary: number;
  customerExpenses:number;
  priviousEMI:number;
  age: number;
  advanceEMI:number;
  tenure:number;
  status:string;
  quotation: CarQuotationDetails;

}
