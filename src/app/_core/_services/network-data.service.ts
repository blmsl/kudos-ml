import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { KudosAuthService } from './auth.service';
import { Observable, of, BehaviorSubject } from 'rxjs';

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
      // tslint:disable-next-line:max-line-length
      // const ref = this.storage.ref('https://firebasestorage.googleapis.com/v0/b/kudosml-221208.appspot.com/o/data%2Fsites%2FAllCellsExport.csv?alt=media&token=dea0c42a-5c59-4e85-82b7-885570f2f64b');
      const ref = this.storage.ref('/data/sites/AllCellsExport.csv');
      const result = await ref.getDownloadURL().toPromise(); // wait till the promise resolves (*)
      this.siteDataCsv = result;
      console.log('AWAIT result', result); // "done!"
    } catch (err) {
      console.log('Site Data Error: ', err.message);
    }
  }

  async getNetworkData(): Promise<any> {

  }
}
