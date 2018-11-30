import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../_core/_shared/material/material.module';

import { NetworkExplorerRoutingModule } from './network-explorer-routing.module';
import { NetworkExplorerComponent } from './network-explorer.component';
import { ExplorerDataTableComponent } from './table-view/explorer-data-table/explorer-data-table.component';
import { MapViewComponent } from './map-view/map-view.component';
import { MapboxComponent } from './map-view/mapbox/mapbox.component';
import { TableViewComponent } from './table-view/table-view.component';
import { MapControlsComponent } from './map-view/map-controls/map-controls.component';
import { ListElementsComponent } from '../_core/_shared/list-elements/list-elements.component';
import { ElementSelectionComponent } from './element-selection/element-selection.component';



@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NetworkExplorerRoutingModule,
  ],
  exports: [
    NetworkExplorerComponent,
  ],
  declarations: [
    NetworkExplorerComponent,
    ExplorerDataTableComponent,
    MapViewComponent,
    MapboxComponent,
    TableViewComponent,
    MapControlsComponent,
    ListElementsComponent,
    ElementSelectionComponent,
  ],
})
export class NetworkExplorerModule { }
