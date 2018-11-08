import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PageNavComponent } from './page-nav.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    PageNavComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
  ],
  exports: [
    PageNavComponent
  ]
})
export class PageNavModule { }
