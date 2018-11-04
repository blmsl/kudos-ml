import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './_core/_shared/page-not-found/page-not-found.component';
import { AuthenticationComponent } from './authentication/authentication.component';


const appRoutes: Routes = [
  { path: '',   redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule( {
  // imports: [RouterModule.forRoot( appRoutes )],
  imports: [RouterModule.forRoot( appRoutes, { enableTracing: false } )],
  exports: [RouterModule]
} )
export class AppRoutingModule { }
