import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { KudosAuthService } from './auth.service';
import { Observable, of, BehaviorSubject } from 'rxjs';
import * as PapaParse from 'papaparse';

// Helpers

@Injectable({
  providedIn: 'root'
})
export class NetworkDataService {

  private siteDataCsv: String = null;
  private siteDataJson: Object;


  constructor (private storage: AngularFireStorage, private kAuth: KudosAuthService) {

    // REMOVE THIS FOR PROPER AUTHENTICATION
    if (this.kAuth.isAuth == null) {
      this.kAuth.login();
    }

  }


}
