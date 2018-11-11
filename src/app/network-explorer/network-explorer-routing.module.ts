import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NetworkExplorerComponent } from './network-explorer.component';
import { MapViewComponent } from './map-view/map-view.component';
import { TableViewComponent } from './table-view/table-view.component';

const explorerRoutes: Routes = [
  {
    path: 'explorer',
    component: NetworkExplorerComponent,
    children: [
      {
        path: '',
        redirectTo: 'map',
        pathMatch: 'full'
      },
      {
        path: 'map',
        component: MapViewComponent
      },
      {
        path: 'table',
        component: TableViewComponent
      },
    ]
  }
];

@NgModule( {
  imports: [RouterModule.forChild( explorerRoutes )],
  exports: [RouterModule]
} )
export class NetworkExplorerRoutingModule { }
