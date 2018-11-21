import { Component, OnInit } from '@angular/core';
import { CsvService } from '../../_core/_services/csv.service';

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
  hideProgBar: Boolean = false;

  obj1 = { id: 1, name: 'obj1' };
  obj2 = { id: 2, name: 'obj2' };
  obj3 = { id: 3, name: 'obj3' };
  obj4 = { id: 3, name: 'obj3' };

  constructor (private parseCsv: CsvService) { }

  ngOnInit() { }


  startParse() {
    this.hideProgBar = false;
    this.testSet();
    this.parseCsv.parseFile(this.file);
  }

  testSet() {
    const set = new Set([this.obj1, this.obj2, this.obj3, this.obj4, this.obj3]);
    console.log('SET', set.entries);
  }


  fileInput(event) {
    this.file = event.target.files[0];
    this.ready = true;
    // this.hideProgBar = true;
  }

}
