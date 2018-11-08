import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';

import * as Papa from 'papaparse';
import { database } from 'firebase';

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

  result$: BehaviorSubject<any> = new BehaviorSubject(null);
  result: any;

  constructor () { }

  ngOnInit() { }



  fileInput(event) {

    this.file = event.target.files[0];

    const getResult = data => {
      console.log(data);
      this.result$.next(data.data);
    };

    this.result = Papa.parse(this.file, {
      header: true,
      complete: function (results) {
        getResult(results);
      }
    });
  }



}
