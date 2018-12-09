import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { IBaseService } from './IBaseService';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


interface IBaseEntity {
  id?: string;
 }

export abstract class BaseService<T extends IBaseEntity> implements IBaseService<T> {

  protected collection: AngularFirestoreCollection<T>;

  constructor (path: string, protected afs: AngularFirestore) {
    this.collection = this.afs.collection(path);
  }

  get(docid: string): Observable<T> {
    return this.collection
      .doc<T>(docid)
      .snapshotChanges()
      .pipe(
        map(doc => {
          if (doc.payload.exists) {
            const data = doc.payload.data() as any;
            const id = doc.payload.id;
            return { id, ...data };
          }
        })
      );
  }


  list(): Observable<T[]> {
    return this.collection
      .snapshotChanges()
      .pipe(
        map(changes => {
          return changes.map(a => {
            const data = a.payload.doc.data() as T;
            data.id = a.payload.doc.id;
            return data;
          });
        })
      );
  }


  add(item: T): Promise<T> {
    const promise = new Promise<T>((resolve, reject) => {
      this.collection.add(item).then(ref => {
        const newItem = {
          id: ref.id,
          ...(item as any)
        };
        resolve(newItem);
      });
    });
    return promise;
  }


  update(item: T): Promise<T> {
    const promise = new Promise<T>((resolve, reject) => {
      const docRef = this.collection
        .doc<T>(item.id)
        .set(item)
        .then(() => {
          resolve({ ...(item as any) });
        });
    });
    return promise;
  }


  delete(id: string): void {
    const docRef = this.collection.doc<T>(id);
    docRef.delete();
  }

}
