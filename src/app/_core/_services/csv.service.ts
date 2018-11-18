import { Injectable } from '@angular/core';
import * as papa from 'papaparse';
// import * as csv from 'csv2json';

@Injectable({
  providedIn: 'root'
})
export class CsvService {

  constructor () { }

  loadCsv(file) {

    papa.parse(file);

  }

}
