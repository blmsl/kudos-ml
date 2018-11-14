import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../_core/_shared/material/material.module';
import { TestingRoutingModule } from './testing-routing.module';
import { TestingComponent } from './testing.component';
import { PageNavModule } from '../_core/_shared/page-nav/page-nav.module';
import { Csv2jsonComponent } from './csv2json/csv2json.component';
import { Flat2jsonComponent } from './flat2json/flat2json.component';
import { DataStructureComponent } from './data-structure/data-structure.component';

@NgModule({
  declarations: [
    TestingComponent,
    Csv2jsonComponent,
    Flat2jsonComponent,
    DataStructureComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    TestingRoutingModule,
    PageNavModule,
  ],
  exports: [
    TestingComponent,
  ]
})
export class TestingModule { }
