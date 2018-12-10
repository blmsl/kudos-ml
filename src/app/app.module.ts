import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Firebase
import { FirebaseConfig } from '../environments/kudos-config';

// Material
import { MaterialModule } from './_core/_shared/material/material.module';

// AngularFire
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireFunctionsModule } from '@angular/fire/functions';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireDatabaseModule } from '@angular/fire/database';
// import { AngularFireMessagingModule } from '@angular/fire/messaging';

// Feature Modules
import { AuthenticationModule } from './_core/_shared/authentication/authentication.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { OptimisationModule } from './optimisation/optimisation.module';
import { NetworkExplorerModule } from './network-explorer/network-explorer.module';
import { TrialsModule } from './trials/trials.module';
import { UserProfileModule } from './user-profile/user-profile.module';
import { WorkstreamsModule } from './workstreams/workstreams.module';
import { AdminModule } from './admin/admin.module';
import { TestingModule } from './testing/testing.module';

// Components
import { HeaderComponent } from './_core/_shared/header/header.component';
import { FooterComponent } from './_core/_shared/footer/footer.component';
import { SidenavComponent } from './_core/_shared/sidenav/sidenav.component';
import { PageNotFoundComponent } from './_core/_shared/page-not-found/page-not-found.component';

// Other


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
    HttpClientModule,
    MaterialModule,

    // Firestore
    AngularFireAuthModule,
    AngularFireFunctionsModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    // AngularFireMessagingModule,
    AngularFireModule.initializeApp( FirebaseConfig ),


    // Feature Modules
    AuthenticationModule,
    DashboardModule,
    OptimisationModule,
    NetworkExplorerModule,
    TrialsModule,
    UserProfileModule,
    WorkstreamsModule,
    AdminModule,
    //
    TestingModule,

    // App Routing
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
} )
export class AppModule { }
