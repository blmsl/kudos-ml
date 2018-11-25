import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { CsvService } from '../../_core/_services/csv.service';
import { FirestoreService } from '../../_core/_services/firestore.service';


interface FileEvent {
  lastModified: number;
  name: string;
  size: number;
  type: string;
}

interface BucketProgress {
  pcnt?: number;
  progress?: number;
  total?: number;
}

interface ProgressObject {
  sites?: BucketProgress;
  sectors?: BucketProgress;
  antennas?: BucketProgress;
  cells?: BucketProgress;
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

  // progStates = {};
  progStates: ProgressObject = {};
  progress$: BehaviorSubject<ProgressObject> = new BehaviorSubject(this.progStates);

  counter$: BehaviorSubject<number> = new BehaviorSubject(0);

  testCounter: number;
  testCounter$: BehaviorSubject<number> = new BehaviorSubject(0);


  constructor (private parseCsvSvc: CsvService, private kfs: FirestoreService) { }

  ngOnInit() {
    this.testCounter$.subscribe(num => {
      this.testCounter = num;
    });
  }


  obsTest() {
    let ii;
    for (ii = 0; ii < 50000; ii++) {
      console.log(ii);
      this.testCounter$.next(ii);
    }
  }


  async startParse() {

    this.hideProgBar = false;

    try {

      const parsedData: any = await this.parseCsvSvc.parseFile(this.file);

      Object.keys(parsedData).forEach(group => {
        // processedCount[group] = parsedData[group].length;
        const total = parsedData[group].length;
        const bucketProg: BucketProgress = { pcnt: 0, progress: 0, total };
        this.progStates[group] = bucketProg;
      });

      console.log('Parse Complete');

      this.uploadData(parsedData);

    } catch (error) {
      console.error('Parse Failed', error);
    }

  }


  uploadData(upData) {

    // STAGES
    // Create New Doc
    // Update Existing Doc
    // Delete Doc

    // https://firebase.google.com/docs/firestore/manage-data/transactions#transactions

    const baseCollection = '/test/sites-database/';


    Object.entries(upData).forEach(([bucket, batch]) => {

      const dbCol = baseCollection + bucket;
      let counter = 0;

      for (const key in batch) {
        if (batch.hasOwnProperty(key)) {
          // this.kfs.createDocument(dbCol, batch[key]);
          const total = this.progStates[bucket].total;
          counter++;
          this.updateProgress(bucket, counter, total);
        }
      }

    });

  }

  private updateProgress(bucket, progress, total) {
    const pcnt = (progress / total) * 100;
    const bcktProgress: BucketProgress = {
      pcnt,
      progress,
      total
    };
    this.progStates[bucket] = bcktProgress;
    this.counter$.next(progress);
    // console.log(bucket, bcktProgress);
  }


  fileInput(event) {
    this.file = event.target.files[0];
    this.ready = true;
    // this.hideProgBar = true;
  }

}
