import { Component, OnInit, NgZone } from '@angular/core';
import { CsvService } from '../../_core/_services/csv.service';
import { FirestoreService } from '../../_core/_services/firestore.service';


interface FileEvent {
  lastModified: number;
  name: string;
  size: number;
  type: string;
}

interface BucketProgress {
  pcnt?: Number;
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
  progStates: ProgressObject;


  constructor (
    private parseCsvSvc: CsvService,
    private kfs: FirestoreService,
    private _ngZone: NgZone,
  ) { }

  ngOnInit() { }


  async startParse() {

    this.hideProgBar = false;

    try {

      const parsedData: any = await this.parseCsvSvc.parseFile(this.file);

      this.progStates = {};

        Object.keys(parsedData).forEach(group => {
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
          this.kfs.createDocument(dbCol, batch[key])
            .then(() => {
              const total = this.progStates[bucket].total;
              counter++;
              this.updateProgress(bucket, counter, total);
            })
            .catch(() => console.error('Upload failed for document', batch[key]));
        }
      }
    });

  }

  private updateProgress(bucket, progress, total) {

    // Calcualate new values
    const pcnt = Number(((progress / total) * 100).toFixed(0));
    const bcktProgress: BucketProgress = {
      pcnt,
      progress,
      total
    };

    // NgZone
    this._ngZone.run(() => {
      setTimeout(() => {
        this.progStates[bucket] = bcktProgress;
      }, 1);
    });

  }


  fileInput(event) {
    this.file = event.target.files[0];
    this.ready = true;
    // this.hideProgBar = true;
  }

}
