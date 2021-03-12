
import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './login/login.component';
import { EmployeeModule } from './module/employee/employee.module';
import { UserModule } from './module/user/user.module';
import { OEModule } from './module/oe/oe.module';
import { CMModule } from './module/cm/cm.module';
import { AHModule } from './module/ah/ah.module';


export const AppRoutes: Routes = [
  {
    path: '',
    component: LoginComponent
  }, {
    path: 'role',
    component: AdminLayoutComponent,
    children: [

      {path: 'emp', loadChildren: () => EmployeeModule},
      {path: 're', loadChildren: () => UserModule},
      {path: 'oe', loadChildren: () => OEModule},
      {path: 'cm', loadChildren: () => CMModule},
      {path: 'ah', loadChildren: () => AHModule},
    ]
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];



