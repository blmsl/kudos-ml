import { NgModule } from '@angular/core';

import { ScrollDispatchModule } from '@angular/cdk/scrolling';

import {
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatButtonModule,
  MatTreeModule,
  MatDividerModule,
  MatSelectModule,
  MatFormFieldModule,
  MatInputModule,
  MatMenuModule,
  MatTableModule,
  MatProgressBarModule,
  MatTabsModule,
  MatRadioModule,
  MatSlideToggleModule,

} from '@angular/material';

// Material Components

@NgModule({
  imports: [
    ScrollDispatchModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatTreeModule,
    MatDividerModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatTableModule,
    MatProgressBarModule,
    MatTabsModule,
    MatRadioModule,
    MatSlideToggleModule,

  ],
  exports: [
    ScrollDispatchModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatTreeModule,
    MatDividerModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatTableModule,
    MatProgressBarModule,
    MatTabsModule,
    MatRadioModule,
    MatSlideToggleModule,

  ],
  declarations: []
})
export class MaterialModule { }
