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
  hideProgBar: Boolean = false;

  userHdrMap = new Map();
  kudosMap = new Map();

  result$: BehaviorSubject<any> = new BehaviorSubject(null);
  result: any;

  filtered: any;

  sitedb;
  sectordb;
  antennadb;
  celldb;

  groups = [
    'SITE',
    'SECTOR',
    'ANTENNA',
    'CELL'
  ];


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
    this.hideProgBar = false;
    this.runPapaParse()
      .then(data => {
        console.log('ASYNC', data, this.result);
      });
  }


  async runPapaParse() {

    const papa = Papa.parse(this.file, {

      header: this.useHeaders,
      skipEmptyLines: true,
      fastMode: true,

      // transformHeader: (hdr) => {
      //   console.log(hdr);
      // },

      complete: ({ data, errors, meta }) => {

        // Rename Custom Keys to Kudos Keys
        const renamedObject = data.map(obj => {
          return Object
            .keys(obj)
            .reduce((acc, key) => {
              const renamedObj = { [this.userHdrMap.get(key) || key]: obj[key] };
              return { ...acc, ...renamedObj };
            }, {});
        });

        this.result = renamedObject;
        this.result$.next(renamedObject);

        this.sitedb = this.filterGroups('SITE');
        this.sectordb = this.filterGroups('SECTOR');
        this.antennadb = this.filterGroups('ANTENNA');
        this.celldb = this.filterGroups('CELL');

        this.hideProgBar = true;

      },

    });
  }

  filterGroups(group) {
    // this.groups.forEach(group => {
    return this.result.map(obj => {
      return Object
        .entries(obj)
        .reduce((acc, pair) => {
          const [key, value] = pair;
          if (this.kudosMap.get(key) === group) {
            return { ...acc, [key]: value };
          } else {
            return { ...acc };
          }
        }, {});
    });
    // });
  }

  fileInput(event) {
    this.result = null;
    this.result$.next(null);
    this.file = event.target.files[0];
    this.ready = true;
    // this.hideProgBar = true;
  }



}
