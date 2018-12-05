import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../_core/_guards/auth.guard';

import { OptimisationComponent } from './optimisation.component';

const optimisationRoutes: Routes = [
  {
    path: 'optimisation',
    canActivate: [AuthGuard],
    component: OptimisationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild( optimisationRoutes )],
  exports: [RouterModule]
})
export class OptimisationRoutingModule { }
