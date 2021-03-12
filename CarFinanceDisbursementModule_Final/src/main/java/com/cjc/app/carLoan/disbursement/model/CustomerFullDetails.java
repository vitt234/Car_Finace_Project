package com.cjc.app.carLoan.disbursement.model;

import java.time.LocalDate;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import lombok.Data;

@Data
@Entity
public class CustomerFullDetails 
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	 private int custId ;
	 private String custName ;
	 
	 @OneToOne(cascade = CascadeType.ALL)
	 private AddressDetails localAddress ;
	 
	 @OneToOne(cascade = CascadeType.ALL)
	 private AddressDetails permentAddress ;
	 
	 @OneToOne(cascade = CascadeType.ALL)
	 private ContactDetails contactDetails ;
	 
	 private String pancardNo ;
	 private String adharcardNo ;
	 private String natureOfOccupation ;
	 private String gender ;
	 private LocalDate dob ;
	 private String cumstomerIntimation;
	 private Double customerSalary;
	 private double customerExpenses;
	 private double priviousEMI;
	 private int age ; //Atomatic generation
	 private double advanceEMI;
	 private int tenure; //Monthly bases
	 private String status;
	 
	 @OneToOne(cascade = CascadeType.ALL)
	 private CarQuotationDetails quotation ;
	 
	// @OneToOne(cascade = CascadeType.ALL)
	// private DocumentUploadDetails document ;
	 
	 //@OneToMany(cascade = CascadeType.ALL)
	 //private List<GuaranterDetails> guarantor ;
	 
	// @OneToOne(cascade = CascadeType.ALL)
	 //private PriviousLoanInformation previousloan ;
	 
	// @OneToOne(cascade = CascadeType.ALL)
	 //private Status status ;

}
