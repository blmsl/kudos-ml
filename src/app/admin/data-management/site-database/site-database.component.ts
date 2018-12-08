import { Component, OnInit, NgZone } from '@angular/core';
import { CsvService } from '../../../_core/_services/csv.service';
import { FirestoreService } from '../../../_core/_services/firebase-firestore.service';



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
  selector: 'app-site-database',
  templateUrl: './site-database.component.html',
  styleUrls: ['./site-database.component.scss']
})
export class SiteDatabaseComponent implements OnInit {


  // State for dropzone CSS toggling
  isHovering: boolean;
  errMsg: String;
  sucMsg: String;
  fileEvent: FileEvent;
  csvFileName: String;
  fileReady: Boolean;
  startImport: Boolean;
  showMessages: Boolean;
  progStates: ProgressObject;

  constructor (private parseCsvSvc: CsvService, private fireSvc: FirestoreService, private _ngZone: NgZone) { }

  ngOnInit() {
    this.initialise();
  }

  initialise() {
    this.errMsg = 'Error';
    this.sucMsg = 'Success';
    // this.errMsg = undefined;
    // this.sucMsg = undefined;
    this.fileEvent = undefined;
    this.csvFileName = undefined;
    this.fileReady = false;
    this.startImport = false;
    this.showMessages = true;
    this.progStates = {};
  }

  toggleHover(event: boolean) {
    this.isHovering = event;
  }

  fileDropped(event) {
    this.fileEvent = event[0];
    this.checkFile();
  }

  fileInputEvent(event) {
    this.fileEvent = event.target.files[0];
    this.checkFile();
  }

  openFile() {
    document.getElementById('fileInput').click();
  }


  checkFile() {
    this.errMsg = '';
    this.sucMsg = '';
    const extn = this.fileEvent.name.split('.')[1];
    // Check File Size
    if ((extn === 'csv' || extn === 'txt') && this.fileEvent.size > 0) {
      this.fileReady = true;
      this.csvFileName = this.fileEvent.name;
    } else {
      this.fileReady = false;
      this.showMessages = true;
      if (this.fileEvent.size <= 0) {
        this.errMsg = 'No file selected (size < 0)';
      } else {
        this.errMsg = 'Inavlid file type selected (csv or txt)';
      }
    }
  }

  async startParse() {

    try {

      this.startImport = true;

      const parsedData: any = await this.parseCsvSvc.parseFile(this.fileEvent);

      this.progStates = {};

      Object.keys(parsedData).forEach(group => {
        const total = parsedData[group].length;
        const bucketProg: BucketProgress = { pcnt: 0, progress: 0, total };
        this.progStates[group] = bucketProg;
      });

      console.log('Parse Complete');

      this.uploadData(parsedData);

    } catch (error) {
      this.startImport = false;
      this.showMessages = true;
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
          this.fireSvc.createDocument(dbCol, batch[key])
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

}
