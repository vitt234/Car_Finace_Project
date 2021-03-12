import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { City } from 'app/model/City.model';
import { State } from 'app/model/State.model';
import { Country } from 'app/model/Country.model';
import { CustomerFullDetails } from 'app/model/CustomerFullDetails.model';
import { CityServiceService } from 'app/module/shared/city-service.service';
import { SaveCustomerService } from 'app/module/shared/save-customer.service';

@Component({
  selector: 'app-custmer-full-details',
  templateUrl: './custmer-full-details.component.html',
  styleUrls: ['./custmer-full-details.component.css']
})
export class CustmerFullDetailsComponent implements OnInit
 {

  constructor(public cityserv:CityServiceService,private fb:FormBuilder,private custServ:SaveCustomerService){}

  customerForm=this.fb.group({
    adharcardNo:  [''],
    advanceEMI:  [''],
    age:  [''],
    contactDetails:this.fb.group( {
      alternateMobileNo:  [''],
      contactId:  [''],
      emailId:  [''],
      landlineNo:  [''],
      primaryMobileNo:  ['']
    }),
    cumstomerIntimation:  [''],
    custId:  [''],
    custName:  [''],
    customerExpenses:  [''],
    customerSalary:  [''],
    dob: null,
    gender:  [''],
    localAddress: this.fb.group
    ({
      addressId:  [''],
      area:  [''],
      buildingNo:  [''],
      pincode:  [''],
      streetName:  [''],
      city: this.fb.group({
        	cityId:  [''],
        	cityName:  [''],
        	cityTaluka: this.fb.group({
		      talukaId:  [''],
          		talukaName:  [''],
		          talukaDistrict: this.fb.group({
            			districtId:  [''],
           			 districtName:  [''],
           			 districtState:this.fb.group({
				             stateId:  [''],
             				 stateName:  [''],
              			 stateCountry: this.fb.group({
                				countryId:  [''],
                				countryName:  ['']
                            						        })
            		              			        })
          				                    })
       			                })
  		                  })

    }),
    natureOfOccupation:  [''],
    pancardNo:  [''],
    permentAddress: this.fb.group
    ({
      addressId:  [''],
      area:  [''],
      buildingNo:  [''],
       pincode:  [''],
      streetName:  [''],
      city: this.fb.group({
        	cityId:  [''],
        	cityName:  [''],
        	cityTaluka: this.fb.group({
		      talukaId:  [''],
          		talukaName:  [''],
		          talukaDistrict: this.fb.group({
            			districtId:  [''],
           			 districtName:  [''],
           			 districtState:this.fb.group({
				             stateId:  [''],
             				 stateName:  [''],
              			 stateCountry: this.fb.group({
                				countryId:  [''],
                				countryName:  ['']
                            						        })
            		              			        })
          				                    })
       			                })
  		                  })

    }),
    priviousEMI:  [''],
    quotation: this.fb.group({
      carModel:  [''],
      carName:  [''],
      carQuotationId:  [''],
      companyName:  [''],
      dealerDetails:this.fb.group( {
        bankDetails: this.fb.group({
          accountType:  [''],
          bankAccountHolderName:  [''],
          bankBranch:  [''],
          bankaccountNumber:  [''],
          bankid:  ['']
        }),
        dealerId:  [''],
        delearName:  ['']
      }),
      onRoadPrice:  [''],
      showRoomPrice:  ['']
    }),
    status:  [''],
    tenure:  ['']


  });


  fillPermanentadd(e:any)
  {
      console.log("Call Fill Method : "+e)
      if (e.target.checked)
          {
            this.customerForm.patchValue(
              {
                permentAddress:
                {
                    buildingNo:this.customerForm.value.localAddress.buildingNo,
                    area:this.customerForm.value.localAddress.area,
                    streetName:this.customerForm.value.localAddress.streetName,
                    pincode:this.customerForm.value.localAddress.pincode,
                    city:
                    {
                      cityName:this.customerForm.value.localAddress.city.cityName,
                      cityTaluka:
                      {
                        talukaName:this.customerForm.value.localAddress.city.cityTaluka.talukaName,
                        talukaDistrict:
                        {
                          districtName:this.customerForm.value.localAddress.city.cityTaluka.talukaDistrict.districtName,
                          districtState:
                          {
                            stateName:this.customerForm.value.localAddress.city.cityTaluka.talukaDistrict.districtState.stateName,
                            stateCountry:
                            {
                              countryName:this.customerForm.value.localAddress.city.cityTaluka.talukaDistrict.districtState.stateCountry.countryName
                            }
                          }
                        }
                      }

                    }

                }
              }
            )
          }
          else
          {
            this.customerForm.patchValue(
              {
                cumstomerIntimation:'Disagreed',
                status:'Approve',
                permentAddress:
                {
                    buildingNo:'',
                    area:'',
                    streetName:'',
                    pincode:0,
                    city:
                    {
                      cityName:'',
                      cityTaluka:
                      {
                        talukaName:'',
                        talukaDistrict:
                        {
                          districtName:'',
                          districtState:
                          {
                            stateName:'',
                            stateCountry:
                            {
                              countryName:''
                            }
                          }
                        }
                      }

                    }
                }
              }
            )
          }
  }

  loanArr:any;

  isError:boolean=false;

  callbackend()
  {
    console.log("Enter In to Component.ts"+this.customerForm.value)
    this.isError=true
    this.custServ.saveCustomer(this.customerForm.value).subscribe((data:any)=>
    {

      this.loanArr=data;

      console.log("Loan Details : ")
      console.log("EMI : "+this.loanArr.emi)
      console.log("Remark : "+this.loanArr.remark)
      console.log("customerName : "+this.loanArr.customerData.custName)
      console.log("Loan Amount :"+this.loanArr.loanAmount)

     });
  }
  msg:string;
  loanWindow:boolean=true
  submitData()
  {
    this.msg='Data Successfully Submited..'

    this.loanWindow=false
    this.isError=false

    this.customerForm.reset();

  }


  createAccountForm: FormGroup;

  countries: Country[];
  states: State[];
  cities:City[];

  cityarr: any;


  ngOnInit(): void
  {

    this.cityserv.getCity().subscribe((data:any)=>
    {
      console.log("Data "+data)
      this.cityarr=data;
       });

    this.createAccountForm = new FormGroup({
      country: new FormControl(''),
      state: new FormControl(''),
      city: new FormControl('')
    });

  }

  m1()
  {
    console.log(this.cityarr)
  }

  country:{};
  state:{};
  city:{};


  onChangeCountry(countryId: number)
   {
     console.log("Country id select "+countryId)

    if (countryId)
    {
          this.state =this.states;
          console.log(this.states)
          this.cities = null;
    }
    else
    {
      this.states = null;
      this.cities = null;
    }
  }

  // onChangeState(stateId: number) {
  //   if (stateId) {
  //     this.cscService.getCities(stateId).subscribe(
  //       data => this.cities = data
  //     );
  //   } else {
  //     this.cities = null;
  //   }
  // }


  custfull: CustomerFullDetails =
  {
    "adharcardNo": ' ',
    "advanceEMI": 0,
    "age": 0,
    "contactDetails": {
      "alternateMobileNo": 0,
      "contactId": 0,
      "emailId": ' ',
      "landlineNo": 0,
      "primaryMobileNo": 0
    },
    "cumstomerIntimation": ' ',
    "custId": 0,
    "custName": ' ',
    "customerExpenses": 0,
    "customerSalary": 0,
    "dob": null,
    "gender": ' ',
    "localAddress": {
      "addressId": 0,
      "area": ' ',
      "buildingNo": ' ',
      "city": {
        "cityId": 0,
        "cityName": ' ',
        "cityTaluka": {
          "talukaDistrict": {
            "districtId": 0,
            "districtName": ' ',
            "districtState": {
              "stateCountry": {
                "countryId": 0,
                "countryName": ' '
              },
              "stateId": 0,
              "stateName": ' '
            }
          },
          "talukaId": 0,
          "talukaName": ' '
        }
      },
      "pincode": 0,
      "streetName": ' '
    },
    "natureOfOccupation": ' ',
    "pancardNo": ' ',
    "permentAddress": {
      "addressId": 0,
      "area": ' ',
      "buildingNo": ' ',
      "city": {
        "cityId": 0,
        "cityName": ' ',
        "cityTaluka": {
          "talukaDistrict": {
            "districtId": 0,
            "districtName": ' ',
            "districtState": {
              "stateCountry": {
                "countryId": 0,
                "countryName": ' '
              },
              "stateId": 0,
              "stateName": ' '
            }
          },
          "talukaId": 0,
          "talukaName": ' '
        }
      },
      "pincode": 0,
      "streetName": ' '
    },
    "priviousEMI": 0,
    "quotation": {
      "carModel": ' ',
      "carName": ' ',
      "carQuotationId": 0,
      "companyName": ' ',
      "dealerDetails": {
        "bankDetails": {
          "accountType": ' ',
          "bankAccountHolderName": ' ',
          "bankBranch": ' ',
          "bankaccountNumber": ' ',
          "bankid": 0
        },
        "dealerId": 0,
        "delearName": ' '
      },
      "onRoadPrice": 0,
      "showRoomPrice": 0
    },
    "status": ' ',
    "tenure": 0
  }
}
