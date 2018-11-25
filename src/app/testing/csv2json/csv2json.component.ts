import { Component, OnInit } from '@angular/core';
import { CsvService } from '../../_core/_services/csv.service';
import { FirestoreService } from '../../_core/_services/firestore.service';


interface FileEvent {
  lastModified: number;
  name: string;
  size: number;
  type: string;
}

interface BucketProgress {
  bucket: {
    progress: number;
    total: number;
  };
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

  // progStates: BucketProgress[]; // bucket: {prog: 0, total:0}
  progStates = {};

  constructor (private parseCsvSvc: CsvService, private kfs: FirestoreService) { }

  ngOnInit() { }


  async startParse() {

    this.hideProgBar = false;

    try {

      const parsedData: any = await this.parseCsvSvc.parseFile(this.file);

      Object.keys(parsedData).forEach(group => {
        // processedCount[group] = parsedData[group].length;
        const total = parsedData[group].length;
        this.progStates[group] = { progress: 0, total };
      });

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

      for (const key in batch) {
        if (batch.hasOwnProperty(key)) {
          this.kfs.createDocument(dbCol, batch[key]);
        }
      }

    });

  }


  fileInput(event) {
    this.file = event.target.files[0];
    this.ready = true;
    // this.hideProgBar = true;
  }

}
