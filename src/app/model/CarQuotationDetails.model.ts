import { DealerDetails } from "./DealerDetails.model";

export class CarQuotationDetails
{

  carQuotationId: number;
  companyName: string;
  carModel: string;
  carName: string;
  showRoomPrice: number;
  onRoadPrice: number;
  dealerDetails: DealerDetails;

}
