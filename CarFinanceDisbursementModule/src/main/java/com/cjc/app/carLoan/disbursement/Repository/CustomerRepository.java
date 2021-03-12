package com.cjc.app.carLoan.disbursement.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cjc.app.carLoan.disbursement.model.CustomerFullDetails;

@Repository
public interface CustomerRepository extends JpaRepository<CustomerFullDetails, Integer> 
{

}
