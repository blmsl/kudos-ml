import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable, BehaviorSubject } from 'rxjs';
import { User } from 'firebase';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  public authState$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public role$: BehaviorSubject<string[]> = new BehaviorSubject([]);
  public user$: BehaviorSubject<User> = new BehaviorSubject(undefined);
  private _user: User;


  constructor (public afAuth: AngularFireAuth, private router: Router) {

    this.afAuth.authState.subscribe((auth) => {
      if (auth != null) {
        this.user$.next(this._user);
        this.authState$.next(true);
      } else {
        this.authState$.next(false);
      }
    });

  }


  isAuth(): boolean {
    return this.authState$.getValue();
  }


  newUser(email, key) {
    console.error('TODO - CREATE NEW USER');
    // this.afAuth.auth.createUserWithEmailAndPassword(email, key);
  }


  login({ email, password }): Promise<any> {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(email, password)
        .then(result => {
          this._user = result.user;
          resolve();
        })
        .catch(() => {
          this._user = undefined;
          this.user$.next(undefined);
          reject();
        });
    });
  }


  async logout() {
    await this.afAuth.auth.signOut();
    this.router.navigate(['signin']);
  }
}
