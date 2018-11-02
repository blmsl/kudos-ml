import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './_core/_shared/page-not-found/page-not-found.component';


import { OptimisationComponent } from './optimisation/optimisation.component';
import { TrialsComponent } from './trials/trials.component';

const appRoutes: Routes = [
  // {
  //   path: 'dashboard',
  //   component: DashboardComponent
  // },
  // {
  //   path: 'topology',
  //   component: TopologyComponent
  // },
  // {
  //   path: 'optimisation',
  //   component: OptimisationComponent
  // },
  // {
  //   path: 'trials',
  //   component: TrialsComponent
  // },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  // {
  //   path: '**',
  //   component: PageNotFoundComponent
  // }
];

@NgModule( {
  // imports: [RouterModule.forRoot( appRoutes, { enableTracing: true } )],
  imports: [RouterModule.forRoot( appRoutes, { enableTracing: false } )],
  exports: [RouterModule]
} )
export class AppRoutingModule { }
