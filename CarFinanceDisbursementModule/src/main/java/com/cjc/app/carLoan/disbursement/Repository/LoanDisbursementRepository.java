package com.cjc.app.carLoan.disbursement.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cjc.app.carLoan.disbursement.model.LoanDisbursementMaster;

@Repository
public interface LoanDisbursementRepository extends JpaRepository<LoanDisbursementMaster, Integer>
{

}
