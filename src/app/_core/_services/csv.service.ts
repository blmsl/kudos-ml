import { Injectable } from '@angular/core';
import { ParseSiteData } from '../_helpers/csv2json';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CsvService {

  parseResult: BehaviorSubject<any> = new BehaviorSubject(null);

  private parse: ParseSiteData;

  constructor () {

    this.parse = new ParseSiteData();
  }

  parseFile(file) {
    this.parse.parseCSV(file)
      .then(response => {

        if (response.result) {
          // Upload to Database
          console.log('Upload to database', response.data);
        }

      })
      .catch(response => {
        // Parse Failed
          console.error('Parse Error', response.data);
       });
  }



}
