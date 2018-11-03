import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../_core/_shared/material/material.module';

import { TopologyRoutingModule } from './topology-routing.module';
import { TopologyComponent } from './topology.component';
import { TopoTreeComponent } from './topo-tree/topo-tree.component';
import { TopoExplorerComponent } from './topo-explorer/topo-explorer.component';
import { TopoListComponent } from './topo-explorer/topo-list/topo-list.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    TopologyRoutingModule,
  ],
  exports: [
    TopologyComponent,
  ],
  declarations: [
    TopologyComponent,
    TopoTreeComponent,
    TopoExplorerComponent,
    TopoListComponent,
  ]
})
export class TopologyModule { }
