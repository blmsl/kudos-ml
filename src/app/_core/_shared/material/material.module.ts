import { NgModule } from '@angular/core';

import {
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatButtonModule,
  MatTreeModule,
  MatDividerModule,

} from '@angular/material';

// Material Components

@NgModule({
  imports: [
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatTreeModule,
    MatDividerModule,

  ],
  exports: [
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatTreeModule,
    MatDividerModule,

  ],
  declarations: []
})
export class MaterialModule { }
