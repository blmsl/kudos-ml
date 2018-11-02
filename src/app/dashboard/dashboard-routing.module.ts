import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from '../_core/_shared/page-not-found/page-not-found.component';

import { DashboardComponent } from './dashboard.component';

const dashboardRoutes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    // children: [
    //   {
    //     path: '',
    //     redirectTo: 'dashboard',
    //     pathMatch: 'full'
    //   },
    // ]
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild( dashboardRoutes )],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
