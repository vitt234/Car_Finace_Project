import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SanctionListComponent } from './sanction-list/sanction-list.component';
import { DisbursmentListComponent } from './disbursment-list/disbursment-list.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const emprouting: Routes = [
  {path: 'ah', component: SanctionListComponent},
  {path: 'dis', component: DisbursmentListComponent}

];



@NgModule({
  declarations: [SanctionListComponent, DisbursmentListComponent],
  imports: [
    CommonModule,FormsModule,ReactiveFormsModule,RouterModule.forChild(emprouting)
  ]
})
export class AHModule { }
