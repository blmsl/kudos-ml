import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestingComponent } from './testing.component';
import { Csv2jsonComponent } from './csv2json/csv2json.component';
import { Flat2jsonComponent } from './flat2json/flat2json.component';
import { DataStructureComponent } from './data-structure/data-structure.component';
import { ObservablesComponent } from './observables/observables.component';


const optimisationRoutes: Routes = [
  {
    path: 'testing',
    component: TestingComponent,
    children: [
      // {
      //   path: '',
      //   redirectTo: 'dashboard',
      //   pathMatch: 'full'
      // },
      {
        path: 'csv2json',
        component: Csv2jsonComponent
      },
      {
        path: 'flat2json',
        component: Flat2jsonComponent
      },
      {
        path: 'data-structure',
        component: DataStructureComponent
      },
      {
        path: 'observables',
        component: ObservablesComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild( optimisationRoutes )],
  exports: [RouterModule]
})
export class TestingRoutingModule { }
