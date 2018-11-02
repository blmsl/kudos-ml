import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TopologyComponent } from './topology.component';
import { PageNotFoundComponent } from '../_core/_shared/page-not-found/page-not-found.component';

import { DashboardComponent } from '../dashboard/dashboard.component';

const topologyRoutes: Routes = [
  {
    path: 'topology',
    component: TopologyComponent,
    // children: [
    //   {
    //     path: '',
    //     redirectTo: 'dashboard',
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
  imports: [RouterModule.forChild( topologyRoutes )],
  exports: [RouterModule]
})
export class TopologyRoutingModule { }
