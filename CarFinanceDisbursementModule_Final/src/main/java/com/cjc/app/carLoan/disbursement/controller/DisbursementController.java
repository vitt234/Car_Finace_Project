package com.cjc.app.carLoan.disbursement.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cjc.app.carLoan.disbursement.model.CustomerFullDetails;
import com.cjc.app.carLoan.disbursement.model.LoanDetails;
import com.cjc.app.carLoan.disbursement.model.LoanDisbursementMaster;
import com.cjc.app.carLoan.disbursement.service.DisbursementService;



@RestController
@CrossOrigin("*")
@RequestMapping("/disbursement")
public class DisbursementController 
{
	@Autowired
	DisbursementService disService;
	
	@GetMapping("/")
	public String preLogin()
	{
		return "Welcome in Disbursement Service";
	}

	  @PostMapping("/calculateEMI") 
	  public LoanDetails calculateEMI(@RequestBody CustomerFullDetails customer) 
	  {
		  System.out.println("Customer Details :"+customer); 
		  return disService.calculateEMI(customer); 
	  }
	  
	  @PostMapping("/saveLoanDetails") 
	  public void saveLoanDetails(@RequestBody LoanDetails loan) 
	  {
		  System.out.println("In to Save Controller..");
		  disService.saveLoanDetails(loan); 
	  }
	  
	  @GetMapping("/getAllLoanDetails") 
	  public List<LoanDetails> getAllLoanDetails() 
	  {
		  return disService.getAllLoanDetails(); 
	  }
	  
	  @PostMapping("/saveLoanDis") 
	  public void saveLoanDis(@RequestBody LoanDisbursementMaster loanDis) 
	  {
		  System.out.println("Enter in to Loan Disbursement Controller..");
		  disService.saveLoanDisbursment(loanDis);
	  }
	  
	  @GetMapping("/getLoanDis") 
	  public List<LoanDisbursementMaster> getLoanDis() 
	  {
		  return disService.getAllDisbursmentDetails(); 
	  }
		 
		@PostMapping("/updateCustomer")
		public void updateCustomer(@RequestBody CustomerFullDetails customer)
		{
			System.out.println("In to Controller..");
			disService.updateCustomer(customer);
		}

}
