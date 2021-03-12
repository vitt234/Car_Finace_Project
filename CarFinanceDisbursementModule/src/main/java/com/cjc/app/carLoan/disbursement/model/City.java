package com.cjc.app.carLoan.disbursement.model;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import lombok.Data;

@Entity
@Data
public class City 
{
	 @Id
	 @GeneratedValue(strategy = GenerationType.IDENTITY)
	 private int cityId ;
	 private String cityName ;
	 
	 @ManyToOne(cascade = CascadeType.ALL)
	 private Taluka cityTaluka;


}
