import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../_core/_shared/material/material.module';
import { TestingRoutingModule } from './testing-routing.module';
import { TestingComponent } from './testing.component';
import { PageNavModule } from '../_core/_shared/page-nav/page-nav.module';
// import { ObservablesComponent } from './observables/observables.component';

@NgModule({
  declarations: [
    TestingComponent,
    // ObservablesComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    TestingRoutingModule,
    PageNavModule,
  ],
  exports: [
    TestingComponent,
  ]
})
export class TestingModule { }
