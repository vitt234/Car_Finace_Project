package com.cjc.app.carLoan.disbursement.model;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;

import lombok.Data;

@Entity
@Data
public class DealerDetails
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	 private int dealerId ;
	 private String delearName ;
	 
	 @OneToOne(cascade = CascadeType.ALL)
	 private Bankdetails bankDetails ;
	 
		/*
		 * @OneToOne(cascade = CascadeType.ALL) private AddressDetails addressDetails ;
		 * 
		 * @OneToOne(cascade = CascadeType.ALL) private ContactDetails contactDetails ;
		 */
}
