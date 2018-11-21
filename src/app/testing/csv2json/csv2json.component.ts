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

  constructor (private parseCsv: CsvService) { }

  ngOnInit() { }


  startParse() {
    this.hideProgBar = false;
    this.parseCsv.parseFile(this.file);
  }


  fileInput(event) {
    this.file = event.target.files[0];
    this.ready = true;
    // this.hideProgBar = true;
  }

}
