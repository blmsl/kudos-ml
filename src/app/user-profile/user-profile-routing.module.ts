import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../_core/_guards/auth.guard';

import { UserProfileComponent } from './user-profile.component';

const userprofileRoutes: Routes = [
  {
    path: 'user-profile',
    canActivate: [AuthGuard],
    component: UserProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild( userprofileRoutes )],
  exports: [RouterModule]
})
export class UserProfileRoutingModule { }
