import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';

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

  result$: BehaviorSubject<any> = new BehaviorSubject(null);
  result: any;

  constructor () { }

  ngOnInit() { }

  setHeader() {
    this.useHeaders = !this.useHeaders;
  }

  startParse() {
    this.result = Papa.parse(this.file, {
      header: this.useHeaders,
      complete: (results) => {
        console.log(results);
        this.result$.next(results.data);
      }
    });
  }


  // startParse_old() {
  //   const getResult = data => {
  //     console.log(data);
  //     this.result$.next(data.data);
  //   };
  //   this.result = Papa.parse(this.file, {
  //     header: true,
  //     complete: function (results) {
  //       getResult(results);
  //     }
  //   });
  // }

  fileInput(event) {
    this.file = event.target.files[0];
    this.ready = true;
  }



}
