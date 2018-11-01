import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './_core/_shared/page-not-found/page-not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TopologyComponent } from './topology/topology.component';
import { OptimisationMLComponent } from './optimisation-ml/optimisation-ml.component';
import { TrialsComponent } from './trials/trials.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'topology',
    component: TopologyComponent
  },
  {
    path: 'optimisation-ml',
    component: OptimisationMLComponent
  },
  {
    path: 'trials',
    component: TrialsComponent
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule( {
  imports: [RouterModule.forRoot( routes )],
  exports: [RouterModule]
} )
export class AppRoutingModule { }
