import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';

import { CsvService } from '../../_core/_services/csv.service';

import * as Papa from 'papaparse';

// import { parseCsv } from '../../_core/_helpers/csv2json';

// import csv from 'csv2json';

interface FileEvent {
  lastModified: number;
  name: string;
  size: number;
  type: string;
}

@Component({
  selector: 'app-csv2json',
  templateUrl: './csv2json.component.html',
  styleUrls: ['./csv2json.component.scss']
})
export class Csv2jsonComponent implements OnInit {

  file: FileEvent;
  ready: Boolean = false;
  useHeaders: Boolean = false;

  public csvFile: any;

  result$: BehaviorSubject<any> = new BehaviorSubject(null);
  result: any;

  constructor (private csv: CsvService) { }

  ngOnInit() { }

  setHeader() {
    this.useHeaders = !this.useHeaders;
  }

  startParse() {
    // this.runPapaParse();
    this.runCsv2Json();
  }


  runCsv2Json() {

    const test = this.csv.loadCsv(this.file);
    console.log(test);


    // const test = this.nds.importCsv(this.file);

    // test.subscribe(resp => this.csvFile = resp);

    // parseCsv(this.file, {});

    // const parserParameters = {};
    // const streamOptions = {};

    // const csv = require('csv2json');
    // const converter = csv(parserParameters, streamOptions);

    // csv()
    //   .fromFile(this.file)
    //   .then((obj) => {
    //     console.log('CSV2JSON', obj);
    //     this.result$.next(obj);
    //   });

  }


  runPapaParse() {

    // const Papa = require('papaparse');

    this.result = Papa.parse(this.file, {
      header: this.useHeaders,
      skipEmptyLines: true,
      fastMode: true,

      transformHeader: (hdr) => {
        console.log(hdr);
      },

      // beforeFirstChunk: (chunk) => {
      //   console.log('first chunk', chunk);
      // },

      // step: function ({ data, errors, meta }, parser) {
      //   console.log('Row data:', data);
      //   console.log('Parser:', parser);
      //   console.log('Row errors:', results.errors);
      // },

      // transform: (val, col) => console.log(val, col),

      complete: ({ data, errors, meta }) => {
        console.log(meta, data);
        this.result$.next(data);
      },

    });
  }


  fileInput(event) {
    this.result$.next(null);
    this.file = event.target.files[0];
    this.ready = true;
  }



}
