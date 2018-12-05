import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../_core/_guards/auth.guard';

import { WorkstreamsComponent } from './workstreams.component';

const optimisationRoutes: Routes = [
  {
    path: 'workstreams',
    canActivate: [AuthGuard],
    component: WorkstreamsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild( optimisationRoutes )],
  exports: [RouterModule]
})
export class WorkstreamsRoutingModule { }
