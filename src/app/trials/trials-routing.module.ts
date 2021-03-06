import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../_core/_guards/auth.guard';

import { TrialsComponent } from './trials.component';
import { TrialsDashboardComponent } from './trials-dashboard/trials-dashboard.component';
import { ActiveTrialsComponent } from './active-trials/active-trials.component';
import { NewTrialComponent } from './new-trial/new-trial.component';
import { CompletedTrialsComponent } from './completed-trials/completed-trials.component';



const trialsRoutes: Routes = [
  {
    path: 'trials',
    component: TrialsComponent,
    canActivate: [AuthGuard],
    children: [
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
        component: CompletedTrialsComponent
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
    ]
  }
];

@NgModule( {
  imports: [RouterModule.forChild( trialsRoutes )],
  exports: [RouterModule]
} )
export class TrialsRoutingModule { }
