import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrialsComponent } from './trials.component';
// import { NewtrialComponent } from './newtrial/newtrial.component';
// import { CurrenttrialsComponent } from './currenttrials/currenttrials.component';
// import { CompletedtrialsComponent } from './completedtrials/completedtrials.component';
// import { TrialresultComponent } from './trialresult/trialresult.component';

// const trialRoutes: Routes = [
//   {
//     path: 'trials',
//     component: TrialsComponent,
//     children: [
//       {
//         path: '',
//         component: CrisisListComponent,
//         children: [
//           {
//             path: ':id',
//             component: CrisisDetailComponent
//           },
//           {
//             path: '',
//             component: CrisisCenterHomeComponent
//           }
//         ]
//       }
//     ]
//   }
// ];

@NgModule( {
  // imports: [RouterModule.forChild(trialRoutes)],
  exports: [RouterModule]
} )
export class TrialRoutingModule { }
