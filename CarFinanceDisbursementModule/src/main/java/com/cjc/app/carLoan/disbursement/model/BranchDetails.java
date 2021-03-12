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
public class BranchDetails 
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int branch_id ;
	private String branchName ;
	private String branchType ;
	private String branchIfscCode ;
	
	@OneToOne(cascade =CascadeType.ALL )
	private ContactDetails branchContactNo ;
	
	@OneToOne(cascade =CascadeType.ALL )
	private AddressDetails branchAddress ;



}
