import { Component, OnInit, ElementRef } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { Observable } from 'rxjs';

interface FileEvent {
  lastModified: number;
  name: string;
  size: number;
  type: string;
}

@Component( {
  selector: 'app-upload-site-info',
  templateUrl: './upload-site-info.component.html',
  styleUrls: ['./upload-site-info.component.scss']
} )
export class UploadSiteInfoComponent implements OnInit {

  // Main task
  task: AngularFireUploadTask;

  // Progress monitoring
  pcnt: Observable<Number>;
  snapshot: Observable<any>;

  // Download URL
  downloadURL: Observable<String>;

  // State for dropzone CSS toggling
  isHovering: boolean;

  fileEvent: FileEvent;
  fileReady: Boolean = false;
  hideControls: Boolean = false;
  uploadStarted: Boolean = false;
  uploadPaused: Boolean = false;
  csvFileName: String;

  constructor( private storage: AngularFireStorage ) { }

  ngOnInit() { }

  toggleHover( event: boolean ) {
    this.isHovering = event;
    console.log( 'Hovered', event );
  }

  fileDropped( event ) {
    this.fileEvent = event[0];
    this.checkFile();
  }

  fileInputEvent( event ) {
    this.fileEvent = event.target.files[0];
    this.checkFile();
  }

  openFile() {
    document.getElementById( 'fileInput' ).click();
  }

  startUpload() {
    this.uploadStarted = true;
    this.uploadPaused = false;
    this.uploadFile();
  }

  cancelUpload() {
    this.task.cancel();
    this.uploadStarted = false;
    this.uploadPaused = false;
  }

  pauseUpload() {
    this.task.pause();
    this.uploadPaused = true;
  }

  resumeUpload() {
    this.task.resume();
    this.uploadPaused = false;
  }

  checkFile() {
    const extn = this.fileEvent.name.split( '.' )[1];
    console.log( { fileEvent: this.fileEvent, filenameExtn: extn, fileSize: this.fileEvent.size } );
    // Check File Size
    if ( ( extn === 'csv' || extn === 'txt' ) && this.fileEvent.size > 0 ) {
      this.fileReady = true;
      this.csvFileName = this.fileEvent.name;
    } else {
      this.fileReady = false;
      if ( this.fileEvent.size <= 0 ) {
        alert( 'No file selected (size < 0)' );
      } else {
        alert( 'Inavlid file type selected (csv or txt)' );
      }
    }
  }

  uploadFile() {
    const path = `tmp/site_data/${this.fileEvent.name}`;

    // Totally optional metadata
    const customMetadata = {
      date: new Date().toDateString(),
      time: new Date().getTime().toString(),
    };

    // The main task
    this.task = this.storage.upload( path, this.fileEvent, { customMetadata } );

    // Progress monitoring
    this.pcnt = this.task.percentageChanges();
    this.snapshot = this.task.snapshotChanges();

    this.pcnt.subscribe( ( p ) => console.log( 'p%', p ) );


    // The file's download URL
    this.downloadURL = this.storage.ref( path ).getDownloadURL();

    this.task.then( ( t ) => {
      this.fileReady = false;
      this.uploadStarted = false;
      this.uploadPaused = false;
      console.log( 'Completed (?)', t );
    } );

  }

  // Determines if the upload task is active
  isActive( snapshot ) {
    return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes;
  }

}
