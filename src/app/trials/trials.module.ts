import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../_core/_shared/material/material.module';

import { TrialsRoutingModule } from './trials-routing.module';

import { TrialsComponent } from './trials.component';
import { ActiveTrialsComponent } from './active-trials/active-trials.component';
import { FinishedTrialsComponent } from './finished-trials/finished-trials.component';
import { NewTrialComponent } from './new-trial/new-trial.component';
import { TrialResultsComponent } from './trial-results/trial-results.component';
import { TrialsDashboardComponent } from './trials-dashboard/trials-dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    TrialsRoutingModule,
  ],
  exports: [
    TrialsComponent,
  ],
  declarations: [
    TrialsComponent,
    ActiveTrialsComponent,
    FinishedTrialsComponent,
    NewTrialComponent,
    TrialResultsComponent,
    TrialsDashboardComponent,
  ]
})
export class TrialsModule { }
