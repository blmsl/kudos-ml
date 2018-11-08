import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkstreamsComponent } from './workstreams.component';

const optimisationRoutes: Routes = [
  {
    path: 'workstreams',
    component: WorkstreamsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild( optimisationRoutes )],
  exports: [RouterModule]
})
export class WorkstreamsRoutingModule { }
