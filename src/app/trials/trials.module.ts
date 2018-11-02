import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../_core/_shared/material/material.module';

import { TrialsComponent } from './trials.component';
import { ActiveTrialsComponent } from './active-trials/active-trials.component';
import { FinishedTrialsComponent } from './finished-trials/finished-trials.component';
import { NewTrialComponent } from './new-trial/new-trial.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    TrialsComponent,
    ActiveTrialsComponent,
    FinishedTrialsComponent,
    NewTrialComponent,
  ],
  declarations: [
    TrialsComponent,
    ActiveTrialsComponent,
    FinishedTrialsComponent,
    NewTrialComponent,
  ]
})
export class TrialsModule { }
