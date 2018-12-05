import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../_core/_guards/auth.guard';

import { NetworkExplorerComponent } from './network-explorer.component';
import { MapViewComponent } from './map-view/map-view.component';
import { TableViewComponent } from './table-view/table-view.component';

const explorerRoutes: Routes = [
  {
    path: 'explorer',
    component: NetworkExplorerComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'map',
        component: MapViewComponent
      },
      {
        path: 'table',
        component: TableViewComponent
      },
      {
        path: '',
        redirectTo: 'table',
        pathMatch: 'full'
      },
    ]
  }
];

@NgModule( {
  imports: [RouterModule.forChild( explorerRoutes )],
  exports: [RouterModule]
} )
export class NetworkExplorerRoutingModule { }
