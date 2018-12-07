import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { BehaviorSubject } from 'rxjs';
import { User } from 'firebase';


interface IProfile {
  email: string;
  lastlogin: Date;
  firebase: User;
  roles: string[];
}


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  public authState$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public role$: BehaviorSubject<string[]> = new BehaviorSubject([]);
  public user$: BehaviorSubject<IProfile> = new BehaviorSubject(undefined);
  private _emptyuser: IProfile = {
    email: null,
    lastlogin: null,
    firebase: null,
    roles: []
  };
  private _user: IProfile = this._emptyuser;


  constructor (public afAuth: AngularFireAuth, private rtdb: AngularFireDatabase, private router: Router) {

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


  isAdmin(): boolean {
    const roles = this._user.roles;
    return roles.some(role => role === 'admin') || roles.some(role => role === 'superuser');
  }


  newUser(email, key) {
    console.error('TODO - CREATE NEW USER');
    // this.afAuth.auth.createUserWithEmailAndPassword(email, key);
  }


  login({ email, password }): Promise<any> {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(email, password)
        .then(async result => {
          this._user.email = result.user.email;
          this._user.firebase = result.user;
          this._user.lastlogin = new Date();
          this._user.roles = await this.userRoles();
          this.user$.next(this._user);
          resolve();
        })
        .catch((err) => {
          this._user = this._emptyuser;
          this.user$.next(this._user);
          reject();
        });
    });
  }

  userRoles(): string[] {
    // const roles = this.rtdb.list();
    return ['user', 'admin', 'superuser'];
   }


  async logout() {
    await this.afAuth.auth.signOut();
    this.router.navigate(['signin']);
  }
}
