import { Component, OnInit, ElementRef } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { Observable } from 'rxjs';

interface FileEvent {
  lastModified: number;
  name: string;
  size: number;
  type: string;
}

@Component({
  selector: 'app-upload-site-info',
  templateUrl: './upload-site-info.component.html',
  styleUrls: ['./upload-site-info.component.scss']
})
export class UploadSiteInfoComponent implements OnInit {

  // Main task
  task: AngularFireUploadTask;

  // Progress monitoring
  percentage: Observable<number>;

  snapshot: Observable<any>;

  // Download URL
  downloadURL: Observable<string>;

  // State for dropzone CSS toggling
  isHovering: boolean;

  fileEvent: FileEvent;

  fileReady: Boolean = false;
  hideControls: Boolean = false;
  uploadStarted: Boolean = false;
  uploadPaused: Boolean = false;
  csvFileName: String;

  constructor(private storage: AngularFireStorage) { }

  ngOnInit() {
  }

  toggleHover(event: boolean) {
    this.isHovering = event;
    console.log('Hovered', event);
  }

  fileDropped(event) {
    this.fileEvent = event[0];
    this.checkFile();
  }

  fileInputEvent(event) {
    this.fileEvent = event.target.files[0];
    this.checkFile();
  }

  checkFile() {
    const extn = this.fileEvent.name.split('.')[1];
    // Check File Size
    if ((extn === 'csv' || extn === 'txt') && this.fileEvent.size > 0) {
      this.fileReady = true;
    } else {
      this.fileReady = false;
    }
    this.csvFileName = this.fileEvent.name;
  }

  openFile() {
    document.getElementById('fileInput').click();
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
