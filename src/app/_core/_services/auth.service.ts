import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable, BehaviorSubject } from 'rxjs';
import { User } from 'firebase';


interface IProfile {
  email: string;
  logintime: Date;
  lastlogin: string;
  firebase: User;
  roles: string[];
}


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // store the URL so we can redirect after logging in
  public redirectUrl: string;
  public user$: BehaviorSubject<IProfile> = new BehaviorSubject(undefined);

  private _isAuth$: BehaviorSubject<boolean>;
  private _emptyuser: IProfile = {
    email: null,
    logintime: null,
    lastlogin: null,
    firebase: null,
    roles: []
  };
  private _user: IProfile = this._emptyuser;


  constructor (public afAuth: AngularFireAuth, private rtdb: AngularFireDatabase, private router: Router) {

    this._isAuth$ = new BehaviorSubject(false);

    this.afAuth.authState.subscribe(async (auth) => {
      if (auth != null) {
        await this.updateUser(auth);
        this._isAuth$.next(true);
      } else {
        this._user = this._emptyuser;
        this.user$.next(this._user);
        this._isAuth$.next(false);
      }
    });

  }


  isAuth(): boolean {
    return this._isAuth$.getValue();
  }


  isAuth$(): Observable<boolean> {
    return this._isAuth$.asObservable();
  }


  isAdmin(): boolean {
    const roles = this._user.roles;
    return roles.some(role => role === 'admin') || roles.some(role => role === 'superuser');
  }


  newUser(email, key) {
    console.error('TODO - CREATE NEW USER');
    // this.afAuth.auth.createUserWithEmailAndPassword(email, key);
  }


  login({ email, password }): Promise<void> {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(email, password)
        .then(() => {
          resolve();
        })
        .catch((err) => {
          console.error(err);
          this._user = this._emptyuser;
          this.user$.next(this._user);
          reject();
        });
    });
  }

  getUserRoles(): string[] {
    // const roles = this.rtdb.list();
    return ['user', 'admin', 'superuser'];
  }


  async logout() {
    await this.afAuth.auth.signOut();
    this.router.navigate(['signin']);
  }

  private async updateUser(userObj: User | any) {
    this._user.email = userObj.email;
    this._user.firebase = userObj;
    this._user.lastlogin = userObj.metadata.lastSignInTime;
    this._user.logintime = new Date();
    this._user.roles = await this.getUserRoles();
    this.user$.next(this._user);
    console.log('UPDATE USER', this._user);
  }
}
