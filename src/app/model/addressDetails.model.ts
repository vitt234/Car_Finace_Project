import { City } from "./City.model";

export class AddressDetails
{
  addressId!: number;
  buildingNo!: string;
  streetName!: string;
  area!: string;

  city!: City;
  pincode!: number;
}
