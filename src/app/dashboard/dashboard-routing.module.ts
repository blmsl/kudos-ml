import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../_core/_guards/auth.guard';

import { DashboardComponent } from './dashboard.component';

const dashboardRoutes: Routes = [
  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    component: DashboardComponent,
  }
];

@NgModule( {
  imports: [RouterModule.forChild( dashboardRoutes )],
  exports: [RouterModule]
} )
export class DashboardRoutingModule { }
