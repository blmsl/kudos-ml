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


// Components
import { HeaderComponent } from './_core/_shared/header/header.component';
import { FooterComponent } from './_core/_shared/footer/footer.component';
import { SidenavComponent } from './_core/_shared/sidenav/sidenav.component';
import { PageNotFoundComponent } from './_core/_shared/page-not-found/page-not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TopologyComponent } from './topology/topology.component';
import { TrialsComponent } from './trials/trials.component';
import { OptimisationMLComponent } from './optimisation-ml/optimisation-ml.component';
import { NewtrialComponent } from './trials/newtrial/newtrial.component';
import { CurrenttrialsComponent } from './trials/currenttrials/currenttrials.component';
import { CompletedtrialsComponent } from './trials/completedtrials/completedtrials.component';
import { TrialresultComponent } from './trials/trialresult/trialresult.component';

@NgModule( {
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
    NewtrialComponent,
    CurrenttrialsComponent,
    CompletedtrialsComponent,
    TrialresultComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    AngularFireAuthModule,
    AngularFireFunctionsModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    // AngularFireMessagingModule,
    AngularFireModule.initializeApp( fbConfig ),
  ],
  providers: [],
  bootstrap: [AppComponent]
} )
export class AppModule { }
