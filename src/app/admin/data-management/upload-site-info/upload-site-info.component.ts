import { Component, OnInit } from '@angular/core';
import { DropZoneDirective } from '../../../drop-zone.directive';

@Component({
  selector: 'app-upload-site-info',
  templateUrl: './upload-site-info.component.html',
  styleUrls: ['./upload-site-info.component.scss']
})
export class UploadSiteInfoComponent implements OnInit {

  hideControls: Boolean = false;
  uploadStarted: Boolean = false;
  uploadPaused: Boolean = false;
  csvFileName: String = 'Some CSV.csv';

  constructor() { }

  ngOnInit() {
  }

  openFile() {
    alert('Open File');
  }

  startUpload() {
    this.uploadStarted = true;
    this.uploadPaused = false;
  }

  cancelUpload() {
    this.uploadStarted = false;
    this.uploadPaused = false;
  }

  pauseUpload() {
    this.uploadPaused = true;
  }

  resumeUpload() {
    this.uploadPaused = false;
  }

}
