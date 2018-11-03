import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../_core/_shared/material/material.module';

import { NetworkExplorerRoutingModule } from './network-explorer-routing.module';
import { NetworkExplorerComponent } from './network-explorer.component';
import { ExplorerDataTableComponent } from './explorer-data-table/explorer-data-table.component';
import { ExplorerListsComponent } from './explorer-lists/explorer-lists.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    NetworkExplorerRoutingModule,
  ],
  exports: [
    NetworkExplorerComponent,
  ],
  declarations: [
    NetworkExplorerComponent,
    ExplorerDataTableComponent,
    ExplorerListsComponent,
  ],
})
export class NetworkExplorerModule { }
