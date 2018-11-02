import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from '../_core/_shared/page-not-found/page-not-found.component';

import { TrialsComponent } from './trials.component';
import { TrialsDashboardComponent } from './trials-dashboard/trials-dashboard.component';
import { ActiveTrialsComponent } from './active-trials/active-trials.component';
import { NewTrialComponent } from './new-trial/new-trial.component';
import { FinishedTrialsComponent } from './finished-trials/finished-trials.component';



const trialsRoutes: Routes = [
  {
    path: 'trials',
    component: TrialsComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component: TrialsDashboardComponent
      },
      {
        path: 'active',
        component: ActiveTrialsComponent
      },
      {
        path: 'new',
        component: NewTrialComponent
      },
      {
        path: 'completed',
        component: FinishedTrialsComponent
      }
    ]
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule( {
  imports: [RouterModule.forChild( trialsRoutes )],
  exports: [RouterModule]
} )
export class TrialsRoutingModule { }
