package com.cjc.app.carLoan.disbursement.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Data;

@Data
@Entity
public class ContactDetails 
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	 private int contactId ;
	 private Long primaryMobileNo ;
	 private Long alternateMobileNo;
	 private Long landlineNo ;
	 private String emailId ;
}
