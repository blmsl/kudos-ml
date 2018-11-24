import { Injectable } from '@angular/core';
import { FirestoreService } from './firestore.service';
import { ParseSiteData } from '../_helpers/csv2json';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CsvService {

  parseResult: BehaviorSubject<any> = new BehaviorSubject(null);

  private parseHelper: ParseSiteData;

  constructor (private kfs: FirestoreService) {
    this.parseHelper = new ParseSiteData();
  }

  parseFile(file) {
    this.parseHelper.parseCSV(file)
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

    // STAGES
    // Create New Doc
    // Update Existing Doc
    // Delete Doc

    // https://firebase.google.com/docs/firestore/manage-data/transactions#transactions

    const baseCollection = '/TEF-UK/sites-database/';


    Object.entries(upData).forEach(([bucket, dataArr]) => {

      const dbCol = baseCollection + bucket;

      const batchGen = this.batchGenerator(dataArr);

      let doc = batchGen.next();

      this.kfs.createDocument(dbCol, doc.value)
        .then(() => doc = batchGen.next())
        .catch((err) => console.error('Firebase Write Err', err));



      console.log('bucket', bucket, dataArr);

    });

  }


  private *batchGenerator(batch) {

    for (const key in batch) {
      if (batch.hasOwnProperty(key)) {
        const element = batch[key];
        yield element;
      }
    }

  }


}
