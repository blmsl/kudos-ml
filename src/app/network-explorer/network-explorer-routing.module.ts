import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NetworkExplorerComponent } from './network-explorer.component';

const explorerRoutes: Routes = [
  { path: 'explorer', component: NetworkExplorerComponent }
];

@NgModule( {
  imports: [RouterModule.forChild( explorerRoutes )],
  exports: [RouterModule]
} )
export class NetworkExplorerRoutingModule { }
