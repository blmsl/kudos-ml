import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable, BehaviorSubject } from 'rxjs';
// import * as firebase from 'firebase';

import { cred } from '../../../environments/kudos-config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  public authState$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public role$: BehaviorSubject<string[]> = new BehaviorSubject([]);

  constructor (public afAuth: AngularFireAuth) {

    this.afAuth.authState.subscribe((auth) => {
      (auth != null) ? this.authState$.next(true) : this.authState$.next(false);
      console.log('Auth State', this.authState$.getValue());
    });

  }

  newUser(email, key) {
    // this.afAuth.auth.createUserWithEmailAndPassword(email, key);
  }

  isAuth(): boolean {
    console.log('Is Auth', this.authState$.getValue());
    return this.authState$.getValue();
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
