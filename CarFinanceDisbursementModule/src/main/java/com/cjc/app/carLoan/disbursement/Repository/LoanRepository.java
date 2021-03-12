package com.cjc.app.carLoan.disbursement.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cjc.app.carLoan.disbursement.model.LoanDetails;

@Repository
public interface LoanRepository extends JpaRepository<LoanDetails,Integer>
{

}
