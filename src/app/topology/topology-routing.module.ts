import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TopologyComponent } from './topology.component';

const topologyRoutes: Routes = [
  { path: 'topology', component: TopologyComponent }
];

@NgModule( {
  imports: [RouterModule.forChild( topologyRoutes )],
  exports: [RouterModule]
} )
export class TopologyRoutingModule { }
