import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../_core/_shared/material/material.module';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { DataManagementComponent } from './data-management/data-management.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UploadSiteInfoComponent } from './data-management/upload-site-info/upload-site-info.component';


import { FileSizePipe } from '../_core/_pipes/file-size.pipe';
import { DropZoneDirective } from '../_core/_directives/drop-zone.directive';
import { AdminWorkstreamsComponent } from './admin-workstreams/admin-workstreams.component';

import { PageNavModule } from '../_core/_shared/page-nav/page-nav.module';
import { SiteDatabaseComponent } from './data-management/site-database/site-database.component';
import { UsersComponent } from './users/users.component';
import { UpdateFiltersComponent } from './data-management/update-filters/update-filters.component';


@NgModule( {
  declarations: [
    FileSizePipe,
    DropZoneDirective,
    AdminComponent,
    DataManagementComponent,
    AdminDashboardComponent,
    UploadSiteInfoComponent,
    AdminWorkstreamsComponent,
    SiteDatabaseComponent,
    UsersComponent,
    UpdateFiltersComponent,
    // PageNavComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AdminRoutingModule,
    PageNavModule
  ],
  exports: [
    AdminComponent
  ]
} )
export class AdminModule { }
