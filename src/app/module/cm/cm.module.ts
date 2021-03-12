import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentVerificationComponent } from './document-verification/document-verification.component';
import { RouterModule, Routes } from '@angular/router';



const emprouting: Routes = [
  {path: 'cm', component:DocumentVerificationComponent},

];


@NgModule({
  declarations: [DocumentVerificationComponent],
  imports: [
    CommonModule,RouterModule.forChild(emprouting)
  ]
})
export class CMModule { }
