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


  constructor(private storage: AngularFireStorage, private kAuth: KudosAuthService) {

    // REMOVE THIS FOR PROPER AUTHENTICATION
    if (this.kAuth.isAuth == null) {
      this.kAuth.login();
    }

    this.initialiseSiteData();
  }


  async initialiseSiteData() {
    try {
      const file = '../../../assets/AllCellsExport.csv';
      PapaParse.parse(file, {
        // delimiter: ',',
        preview: 10,
        header: false,
        trimHeaders: false,
        complete: function (results) {
          this.siteDataJson = results;
          console.log('PapaParse Result', results);
        }
      });
      // const ref = this.storage.ref('/data/sites/AllCellsExport.csv');
      // const csvUrl = await ref.getDownloadURL().toPromise(); // wait till the promise resolves (*)
      // PapaParse.parse(csvUrl, {
      //   download: true,
      //   header: true,
      //   trimHeaders: true,
      //   complete: function(results) {
      //     console.log('PapaParse Result', results);
      //   }
      // });
      console.log('AWAIT result', this.siteDataJson); // "done!"
    } catch (err) {
      console.log('Site Data Error: ', err.message);
    }
  }

  async getNetworkData(): Promise<any> {

  }
}
