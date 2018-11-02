import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../_core/_shared/material/material.module';

import { TopologyComponent } from './topology.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    TopologyComponent,
  ],
  declarations: [
    TopologyComponent,
  ]
})
export class TopologyModule { }
