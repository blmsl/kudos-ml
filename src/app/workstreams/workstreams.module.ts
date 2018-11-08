import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../_core/_shared/material/material.module';

import { WorkstreamsRoutingModule } from './workstreams-routing.module';
import { WorkstreamsComponent } from './workstreams.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    WorkstreamsRoutingModule
  ],
  exports: [
    WorkstreamsComponent,
  ],
  declarations: [
    WorkstreamsComponent
  ]
})
export class WorkstreamsModule { }
