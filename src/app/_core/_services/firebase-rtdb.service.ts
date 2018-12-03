import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseRtdbService {

  constructor (private rtdb: AngularFireDatabase) { }

  getList(listname): Observable<any[]> {
    return this.rtdb.list(listname).valueChanges();
  }

}
