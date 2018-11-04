import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable, BehaviorSubject } from 'rxjs';
import * as firebase from 'firebase';

import { cred } from '../../../environments/firebase';

@Injectable({
  providedIn: 'root'
})
export class KudosAuthService {

  public authState: any = null;
  public authState$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(public afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe((auth) => {
      this.authState = auth;
      (auth != null) ? this.authState$.next(true) : this.authState$.next(false);
     });
   }

  newUser(email, key) {
    // this.afAuth.auth.createUserWithEmailAndPassword(email, key);
  }

  isAuth(): Boolean {
    console.log('Is Auth', this.authState);
    return this.authState;
  }

  login() {
    console.log('MUST CHANGE AUTO LOGIN');
    this.afAuth.auth.signInWithEmailAndPassword(cred.email, cred.key);
  }

  logout() {
    console.log('Auth SignOut');
    this.afAuth.auth.signOut();
  }
}
