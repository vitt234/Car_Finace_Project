package com.cjc.app.carLoan.disbursement.model;

import java.time.LocalDate;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;

import lombok.Data;

@Entity
@Data
public class LoanDetails 
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	 private int loanId ;
	 
	@OneToOne(cascade = CascadeType.ALL)
	 private CustomerFullDetails customerData;
	
	 private double loanAmount ;
	 private double rateOfInterest ;
	 private double processingFees ;
	 //private double totalInterest ;
	 private LocalDate sanctionDate ;
	 private double insurance;
	 private String remark ;
	 private String status ;
	 private double emi ;
	 private double totalloaninterest;
	 private double totalamountpaid;
	 
}
