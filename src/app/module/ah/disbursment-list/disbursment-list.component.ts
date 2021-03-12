import { Component, OnInit } from '@angular/core';
import { LoanDisbursementMaster } from 'app/model/LoanDisbursementMaster.model';
import { DisbursementMasterService } from 'app/module/shared/disbursement-master.service';

@Component({
  selector: 'app-disbursment-list',
  templateUrl: './disbursment-list.component.html',
  styleUrls: ['./disbursment-list.component.css']
})
export class DisbursmentListComponent implements OnInit {

  constructor(private DisServ:DisbursementMasterService) { }

    loanDisDetails:LoanDisbursementMaster;

  ngOnInit(): void {

    this.DisServ.getDisbursementList().subscribe((data:any)=> {
      this.loanDisDetails=data;
       });
  }

}
