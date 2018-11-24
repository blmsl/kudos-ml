import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreDocument,
  AngularFirestoreCollection,
  DocumentChangeType,
  DocumentReference,
  // SnapshotMetadata,
  DocumentData
} from '@angular/fire/firestore';


interface DocumentChangeAction {
  // 'added' | 'modified' | 'removed';
  type: DocumentChangeType;
  payload: DocumentChange;
}

interface DocumentChange {
  type: DocumentChangeType;
  doc: DocumentSnapshot;
  oldIndex: number;
  newIndex: number;
}

interface DocumentSnapshot {
  exists: boolean;
  ref: DocumentReference;
  id: string;
  metadata: any; // SnapshotMetadata;
  data(): DocumentData;
  get(fieldPath: string): any;
}



@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor (private afs: AngularFirestore) {

  }


  async createDocument(dbCol, dbDoc) {

    const id = dbDoc._id;
    const _dbCol = this.afs.collection(dbCol);

    await _dbCol.doc(id).set(dbDoc);

    console.log('DB Write', dbCol);

  }





}
