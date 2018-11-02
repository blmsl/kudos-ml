import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../_core/_shared/material/material.module';

import { TopologyRoutingModule } from './topology-routing.module';
import { TopologyComponent } from './topology.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    TopologyRoutingModule,
  ],
  exports: [
    TopologyComponent,
  ],
  declarations: [
    TopologyComponent,
  ]
})
export class TopologyModule { }
