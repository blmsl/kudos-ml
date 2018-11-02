import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Firebase
import { fbConfig } from '../environments/firebase';

// Material
import { MaterialModule } from './_core/_shared/material/material.module';

// AngularFire
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireFunctionsModule } from '@angular/fire/functions';
import { AngularFireStorageModule } from '@angular/fire/storage';
// import { AngularFireMessagingModule } from '@angular/fire/messaging';

// Feature Modules
import { DashboardModule } from './dashboard/dashboard.module';
import { OptimisationModule } from './optimisation/optimisation.module';
import { TopologyModule } from './topology/topology.module';
import { TrialsModule } from './trials/trials.module';

// Components
import { HeaderComponent } from './_core/_shared/header/header.component';
import { FooterComponent } from './_core/_shared/footer/footer.component';
import { SidenavComponent } from './_core/_shared/sidenav/sidenav.component';
import { PageNotFoundComponent } from './_core/_shared/page-not-found/page-not-found.component';

@NgModule( {
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,

    // Firestore
    AngularFireAuthModule,
    AngularFireFunctionsModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    // AngularFireMessagingModule,
    AngularFireModule.initializeApp( fbConfig ),


    // Feature Modules
    DashboardModule,
    OptimisationModule,
    TopologyModule,
    TrialsModule,

    // App Routing
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
} )
export class AppModule { }
