import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CibilComponent } from './cibil/cibil.component';
import { RouterModule, Routes } from '@angular/router';
import { SanctionListComponent } from './sanction-list/sanction-list.component';


const emprouting: Routes = [


  {path: 're', component: SanctionListComponent},
];
@NgModule({
  declarations: [CibilComponent, SanctionListComponent],
  imports: [
    CommonModule,RouterModule.forChild(emprouting)
  ]
})
export class UserModule { }
