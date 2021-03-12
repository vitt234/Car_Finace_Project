package com.cjc.app.carLoan.disbursement.serviceImpl;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cjc.app.carLoan.disbursement.Repository.CustomerRepository;
import com.cjc.app.carLoan.disbursement.Repository.LoanDisbursementRepository;
import com.cjc.app.carLoan.disbursement.Repository.LoanRepository;
import com.cjc.app.carLoan.disbursement.model.Bankdetails;
import com.cjc.app.carLoan.disbursement.model.CustomerFullDetails;
import com.cjc.app.carLoan.disbursement.model.LoanDisbursementMaster;
import com.cjc.app.carLoan.disbursement.model.LoanDetails;
import com.cjc.app.carLoan.disbursement.service.DisbursementService;

@Service
public class DisbursementServiceImpl implements DisbursementService
{
	@Autowired
	LoanRepository loanRepo;
	
	@Autowired
	CustomerRepository custRepo;
	
	@Autowired
	LoanDisbursementRepository loanDisRepo;

	//For Return LoanDetails
	
	  @Override public LoanDetails calculateEMI(CustomerFullDetails customer) 
	  {
	  final double insurance=5000;
	  final double proceesingFees=3500; 
	  double r=0.12/12; 
	  final double eligibleEMI=Math.abs(customer.getCustomerSalary()-customer.
	  getCustomerExpenses()-customer.getPriviousEMI());
	  
	  double p=(customer.getQuotation().getOnRoadPrice()-customer.getAdvanceEMI())+
	  proceesingFees+insurance; 
	  
	  double n=customer.getTenure()*12;
	  
	  double emi= (p*r*Math.pow(1+r,n))/(Math.pow(1+r,n)-1);
	  
	  double totalInterest=emi*n-p;
	  double totalAmountPaid=totalInterest+customer.getAdvanceEMI()+p;

	  
	  
	  LoanDetails loan=new LoanDetails();
	  
	  System.out.println("Eligble EMI "+eligibleEMI+" EMI::"+emi);
	  
	  if(eligibleEMI>=emi) 
	  { 
		  
	   System.out.println(" In to IF");
	  customer.setCumstomerIntimation("Pending"); 
	  customer.setStatus("Pending");
	  loan.setCustomerData(customer);
	  loan.setLoanAmount(p);
	  loan.setRateOfInterest(r);
	  loan.setProcessingFees(proceesingFees); 
	  loan.setInsurance(insurance);
	  loan.setSanctionDate(LocalDate.now()); 
	  loan.setEmi(emi);
	  loan.setTotalloaninterest(totalInterest);
	  loan.setTotalamountpaid(totalAmountPaid);
	  loan.setRemark("Eligible for Loan");
	  loan.setStatus("Ok");
	  
	  return loanRepo.save(loan);
	  
	  }
	  
	  System.out.println("Return Null...");
	  
	  return null;
	  
	  }
	 
	@Override
	public void updateCustomer(CustomerFullDetails customer ) 
	{
		System.out.println("Customer Update : "+custRepo.save(customer));
	}

	@Override
	public void saveLoanDisbursment(LoanDisbursementMaster loanDis) 
	{
		System.out.println("Enter In to save method.../n Loan Dis details :"+loanDis);
		System.out.println("LoanDetails :"+loanDis.getLoandata());
		System.out.println("CustomerData : "+loanDis.getLoandata().getCustomerData());
		loanDisRepo.save(loanDis);	
	}

	@Override
	public List<LoanDisbursementMaster> getAllDisbursmentDetails()
	{
		
		return loanDisRepo.findAll();
	}

	@Override
	public List<LoanDetails> getAllLoanDetails() {
		return loanRepo.findAll();
	}

	@Override
	public void saveLoanDetails(LoanDetails loan) 
	{
		
		loanRepo.save(loan);
	}

}
