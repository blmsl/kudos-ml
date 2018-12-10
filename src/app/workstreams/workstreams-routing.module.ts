import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../_core/_guards/auth.guard';

import { WorkstreamsComponent } from './workstreams.component';

const workstreamsRoutes: Routes = [
  {
    path: 'workstreams',
    canActivate: [AuthGuard],
    component: WorkstreamsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild( workstreamsRoutes )],
  exports: [RouterModule]
})
export class WorkstreamsRoutingModule { }
