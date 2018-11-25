import { Injectable } from '@angular/core';
import { ParseSiteData } from '../_helpers/csv2json';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CsvService {

  parseResult: BehaviorSubject<any> = new BehaviorSubject(null);

  private parseHelper: ParseSiteData;

  constructor () {
    this.parseHelper = new ParseSiteData();
  }

  parseFile(file): Promise<any> {

    return new Promise((resolve, reject) => {

      this.parseHelper.parseCSV(file)
        .then(response => {
          if (response.result) {
            const data = response.data;
            resolve(data);
          }
        })
        .catch(response => {
          // Parse Failed
          reject(response.data);
        });

    });

  }



}
