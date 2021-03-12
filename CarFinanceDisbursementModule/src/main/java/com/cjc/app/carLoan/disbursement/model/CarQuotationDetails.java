package com.cjc.app.carLoan.disbursement.model;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;

import lombok.Data;

@Data
@Entity
public class CarQuotationDetails 
{
	 @Id
	 @GeneratedValue(strategy = GenerationType.IDENTITY)
	 private int carQuotationId ;
	 private String companyName ;
	 private String carModel ;
	 private String carName ;
	 private Double showRoomPrice ;
	 private Double onRoadPrice ;
	 
	 @OneToOne(cascade = CascadeType.ALL)
	 private DealerDetails dealerDetails ;

}
