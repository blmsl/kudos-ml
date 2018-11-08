import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

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
  result: Observable<any>;

  constructor () { }

  ngOnInit() {
  }


  fileInput(event) {
    this.file = event.target.files[0];
    console.log('File', this.file);
    this.result = of(Papa.parse(this.file));
    this.result.subscribe((parsed) => console.log('Result', parsed));
  }


}
