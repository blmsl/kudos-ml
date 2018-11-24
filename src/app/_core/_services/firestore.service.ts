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

  createDocument(dbCol, dbDoc): Promise<any> {

    return new Promise((resolve, reject) => {
      const id = dbDoc._id;
      const _dbCol = this.afs.collection(dbCol);
      console.log('DB Write', dbDoc);
      _dbCol.doc(id).set(dbDoc)
        .then(() => resolve())
        .catch(() => reject);
    });

  }





}
