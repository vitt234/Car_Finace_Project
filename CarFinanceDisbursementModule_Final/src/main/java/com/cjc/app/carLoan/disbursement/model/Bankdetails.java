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
public class Bankdetails
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int bankid;
	private String bankaccountNumber;
	private String bankAccountHolderName;
	private String accountType;
	private String bankBranch;
	
	//@OneToOne(cascade =CascadeType.ALL )
	//private BranchDetails bankBranch;

}
