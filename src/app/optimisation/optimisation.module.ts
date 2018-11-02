import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../_core/_shared/material/material.module';

import { OptimisationComponent } from './optimisation.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    OptimisationComponent,
  ],
  declarations: [
    OptimisationComponent
  ]
})
export class OptimisationModule { }
