import { Injectable } from '@angular/core';
import { FirestoreService } from './firestore.service';
import { ParseSiteData } from '../_helpers/csv2json';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CsvService {

  parseResult: BehaviorSubject<any> = new BehaviorSubject(null);

  private parse: ParseSiteData;

  constructor (private afs: FirestoreService) {

    this.parse = new ParseSiteData();
  }

  parseFile(file) {
    this.parse.parseCSV(file)
      .then(response => {

        if (response.result) {

          const data = response.data;

          const processedCount = {};
          Object.keys(data).forEach(group => {
            processedCount[group] = data[group].length;
          });

          // Upload to Database
          this.uploadData(data);
        }

      })
      .catch(response => {
        // Parse Failed
        console.error('Parse Error', response.data);
      });
  }

  private uploadData(upData) {
    //
    console.log('Upload to database', upData);

    const baseCollection = '/sites-database/TEF-UK/';

    // STAGES
    // Create New Doc
    // Update Existing Doc
    // Delete Doc

    // https://firebase.google.com/docs/firestore/manage-data/transactions#transactions

    Object.keys(upData).forEach(bucket => {


    });


  }



}
