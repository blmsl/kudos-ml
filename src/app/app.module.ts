import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Firebase
import { fbConfig } from '../environments/firebase';

// Material
import { MaterialModule } from './_core/_shared/material/material.module';

// Components
import { HeaderComponent } from './_core/_shared/header/header.component';
import { FooterComponent } from './_core/_shared/footer/footer.component';
import { SidenavComponent } from './_core/_shared/sidenav/sidenav.component';
import { PageNotFoundComponent } from './_core/_shared/page-not-found/page-not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TopologyComponent } from './topology/topology.component';
import { TrialsComponent } from './trials/trials.component';
import { OptimisationMLComponent } from './optimisation-ml/optimisation-ml.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
    PageNotFoundComponent,
    DashboardComponent,
    TopologyComponent,
    TrialsComponent,
    OptimisationMLComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
