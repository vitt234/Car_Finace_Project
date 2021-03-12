import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustmerFullDetailsComponent } from './custmer-full-details/custmer-full-details.component';
import { FileInitiateComponent } from './file-initiate/file-initiate.component';
import { CibilCheckComponentComponent } from './cibil-check-component/cibil-check-component.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';


const emprouting: Routes = [
  {path: 'custDetails', component: CustmerFullDetailsComponent},
  {path: 'fileinitiate', component: FileInitiateComponent},
  {path: 'cibilcheck', component: CibilCheckComponentComponent}
];


@NgModule({
  declarations: [CustmerFullDetailsComponent, FileInitiateComponent, CibilCheckComponentComponent,
  ],
  imports: [
    CommonModule,FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatTooltipModule,RouterModule.forChild(emprouting)
  ],exports:[CustmerFullDetailsComponent,FileInitiateComponent]
})
export class OEModule { }
