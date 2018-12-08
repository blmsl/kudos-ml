import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoleGuard } from '../_core/_guards/role.guard';

import { AdminComponent } from './admin.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { DataManagementComponent } from './data-management/data-management.component';
import { UsersComponent } from './users/users.component';
import { AdminWorkstreamsComponent } from './admin-workstreams/admin-workstreams.component';


const adminRoutes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [RoleGuard],
    data: { expectedRole: 'admin' },
    children: [
      {
        path: 'dashboard',
        component: AdminDashboardComponent
      },
      {
        path: 'data-manager',
        component: DataManagementComponent
      },
      {
        path: 'users',
        component: UsersComponent
      },
      {
        path: 'workstreams-manager',
        component: AdminWorkstreamsComponent
      },
      {
        path: '',
        // component: AdminDashboardComponent
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
