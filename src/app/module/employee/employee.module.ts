import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoComponent } from './demo/demo.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddressComponent } from './address/address.component';

const emprouting: Routes = [
  {path: 'empdash', component: DashboardComponent},
  {path: 'demo', component: DemoComponent},
  {path: 'user', component: AddressComponent}
];

@NgModule({
  declarations: [DashboardComponent, DemoComponent, AddressComponent],
  imports: [
    CommonModule, RouterModule.forChild(emprouting)
  ]
})
export class EmployeeModule { }
