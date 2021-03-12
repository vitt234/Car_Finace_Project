package com.cjc.app.carLoan.disbursement.service;

import java.util.List;

import com.cjc.app.carLoan.disbursement.model.CustomerFullDetails;
import com.cjc.app.carLoan.disbursement.model.LoanDisbursementMaster;
import com.cjc.app.carLoan.disbursement.model.LoanDetails;

public interface DisbursementService 
{
	LoanDetails calculateEMI(CustomerFullDetails customer);

	void updateCustomer(CustomerFullDetails customer);

	void saveLoanDisbursment(LoanDisbursementMaster loanDis);

	List<LoanDisbursementMaster> getAllDisbursmentDetails();

	List<LoanDetails> getAllLoanDetails();

	void saveLoanDetails(LoanDetails loan);

}
