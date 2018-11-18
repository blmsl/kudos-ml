import { Injectable } from '@angular/core';
import * as papa from 'papaparse';
// import * as csv from 'csv2json';

@Injectable({
  providedIn: 'root'
})
export class CsvService {

  constructor () { }

  loadCsv(file) {

    // papa.parse(this.file, {
    //   header: this.useHeaders,
    //   skipEmptyLines: true,
    //   fastMode: true,

    //   transformHeader: (hdr) => {
    //     console.log(hdr);
    //   },

      // beforeFirstChunk: (chunk) => {
      //   console.log('first chunk', chunk);
      // },

      // step: function ({ data, errors, meta }, parser) {
      //   console.log('Row data:', data);
      //   console.log('Parser:', parser);
      //   console.log('Row errors:', results.errors);
      // },

      // transform: (val, col) => console.log(val, col),

      // complete: ({ data, errors, meta }) => {
      //   console.log(meta, data);
      //   this.result$.next(data);
      // },

    // });

  }

}
