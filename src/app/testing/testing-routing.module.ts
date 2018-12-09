import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestingComponent } from './testing.component';
// import { Csv2jsonComponent } from './_old/csv2json/csv2json.component';


const optimisationRoutes: Routes = [
  {
    path: 'testing',
    component: TestingComponent,
    children: [
      // {
      //   path: 'observables',
      //   component: ObservablesComponent
      // },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild( optimisationRoutes )],
  exports: [RouterModule]
})
export class TestingRoutingModule { }
