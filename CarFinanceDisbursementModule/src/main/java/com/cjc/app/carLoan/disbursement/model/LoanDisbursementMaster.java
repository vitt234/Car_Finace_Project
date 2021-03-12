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
public class LoanDisbursementMaster 
{
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	 private int loanDisbursementMasterId ;
	
	@OneToOne(cascade = CascadeType.ALL)
	 private LoanDetails loandata;
	
	 private String amountPayType ;
	 private Double totalLoanAmount ;
	 private String bankName ;
	 private String accountNumber ;
	 private String IFSCCode ;
	 private String accountType ;
	 private Double transferAmount ;
	 private String paymentStatus ;
	 private LocalDate amountPaidDate ;
}
