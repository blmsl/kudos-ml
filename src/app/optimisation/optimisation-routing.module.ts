import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from '../_core/_shared/page-not-found/page-not-found.component';

import { OptimisationComponent } from './optimisation.component';

const optimisationRoutes: Routes = [
  {
    path: 'optimisation',
    component: OptimisationComponent,
    // children: [
    //   {
    //     path: '',
    //     redirectTo: 'optimisation',
    //     pathMatch: 'full'
    //   },
    // ]
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild( optimisationRoutes )],
  exports: [RouterModule]
})
export class OptimisationRoutingModule { }
