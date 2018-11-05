import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { DataManagementComponent } from './data-management/data-management.component';


const adminRoutes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component: AdminDashboardComponent
      },
      {
        path: 'data-manager',
        component: DataManagementComponent
      },
    ]
  }
];

@NgModule( {
  imports: [RouterModule.forChild( adminRoutes )],
  exports: [RouterModule]
} )
export class AdminRoutingModule { }
