import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OptimisationComponent } from './optimisation.component';

const optimisationRoutes: Routes = [
  {
    path: 'optimisation',
    component: OptimisationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild( optimisationRoutes )],
  exports: [RouterModule]
})
export class OptimisationRoutingModule { }
