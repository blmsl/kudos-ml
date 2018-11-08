import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../_core/_shared/material/material.module';

import { TrialsRoutingModule } from './trials-routing.module';

import { TrialsComponent } from './trials.component';
import { ActiveTrialsComponent } from './active-trials/active-trials.component';
import { CompletedTrialsComponent } from './completed-trials/completed-trials.component';
import { NewTrialComponent } from './new-trial/new-trial.component';
import { TrialResultsComponent } from './trial-results/trial-results.component';
import { TrialsDashboardComponent } from './trials-dashboard/trials-dashboard.component';

import { PageNavModule } from '../_core/_shared/page-nav/page-nav.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    TrialsRoutingModule,
    PageNavModule,
  ],
  exports: [
    TrialsComponent,
  ],
  declarations: [
    TrialsComponent,
    ActiveTrialsComponent,
    CompletedTrialsComponent,
    NewTrialComponent,
    TrialResultsComponent,
    TrialsDashboardComponent,
    // PageNavComponent,
  ]
})
export class TrialsModule { }
