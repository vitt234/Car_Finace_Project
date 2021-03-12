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
public class AddressDetails
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int addressId ;
	 private String buildingNo ;
	 private String streetName ;
	 private String area ;
 
 
 @OneToOne(cascade =CascadeType.ALL )
 private City city ;
 
 private int pincode ;



}
