import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestingComponent } from './testing.component';
import { Csv2jsonComponent } from './csv2json/csv2json.component';

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
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild( optimisationRoutes )],
  exports: [RouterModule]
})
export class TestingRoutingModule { }
