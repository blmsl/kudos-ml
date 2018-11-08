import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestingRoutingModule } from './testing-routing.module';
import { TestingComponent } from './testing.component';
import { PageNavModule } from '../_core/_shared/page-nav/page-nav.module';
import { Csv2jsonComponent } from './csv2json/csv2json.component';

@NgModule({
  declarations: [
    TestingComponent,
    Csv2jsonComponent
  ],
  imports: [
    CommonModule,
    TestingRoutingModule,
    PageNavModule,
  ],
  exports: [
    TestingComponent,
  ]
})
export class TestingModule { }
