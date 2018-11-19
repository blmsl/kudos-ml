import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { headerMapping, kudosSiteMapping } from '../../_core/_models/user_defined_maps';

import * as Papa from 'papaparse';


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
  useHeaders: Boolean = true;

  userHdrMap = new Map();
  kudosMap = new Map();

  result$: BehaviorSubject<any> = new BehaviorSubject(null);
  result: any;


  constructor () {

    // Header Map User -> Kudos
    for (const [s, t] of headerMapping) {
      this.userHdrMap.set(s, t);
    }

    // Kudos Groups mapping
    for (const [h, g] of kudosSiteMapping) {
      this.kudosMap.set(h, g);
    }
  }

  ngOnInit() { }

  setHeader() {
    this.useHeaders = !this.useHeaders;
  }

  startParse() {
    this.runPapaParse();
  }


  runPapaParse() {

    this.result = Papa.parse(this.file, {

      header: this.useHeaders,
      skipEmptyLines: true,
      fastMode: true,

      // transformHeader: (hdr) => {
      //   console.log(hdr);
      // },

      complete: ({ data, errors, meta }) => {
        this.result = data;
        this.result$.next(data);
        const renamedObject = data.map(obj => {
          return Object
            .keys(obj)
            .reduce((acc, key) => {
              const renamedObj = { [this.userHdrMap.get(key) || key]: obj[key] };
              return { ...acc, ...renamedObj };
            }, {});

        });
        console.log('RENAMED', renamedObject);
      },

    });
  }



  fileInput(event) {
    this.result$.next(null);
    this.file = event.target.files[0];
    this.ready = true;
  }



}
