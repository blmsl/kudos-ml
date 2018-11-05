import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../_core/_shared/material/material.module';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { DataManagementComponent } from './data-management/data-management.component';
import { AdminMenuComponent } from './admin-menu/admin-menu.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UploadSiteInfoComponent } from './data-management/upload-site-info/upload-site-info.component';


import { FileSizePipe } from '../_core/_pipes/file-size.pipe';
import { DropZoneDirective } from '../_core/_directives/drop-zone.directive';


@NgModule( {
  declarations: [
    FileSizePipe,
    DropZoneDirective,
    AdminComponent,
    DataManagementComponent,
    AdminMenuComponent,
    AdminDashboardComponent,
    UploadSiteInfoComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AdminRoutingModule
  ],
  exports: [
    AdminComponent
  ]
} )
export class AdminModule { }
