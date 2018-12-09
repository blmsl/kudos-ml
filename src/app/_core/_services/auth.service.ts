import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from 'firebase';


interface IProfile {
  active: boolean;
  admin: boolean;
  email: string;
  logintime: Date;
  lastlogin: string;
  firebase: User;
  roles: string[];
}

interface IUserData {
  id: string;
  active: boolean;
  roles: string[];
}


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // store the URL so we can redirect after logging in
  public redirectUrl: string;
  public user$: BehaviorSubject<IProfile> = new BehaviorSubject(undefined);

  private _isAdmin$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  private _isAuth$: BehaviorSubject<boolean>;
  private _emptyuser: IProfile = {
    active: null,
    admin: false,
    email: null,
    logintime: null,
    lastlogin: null,
    firebase: null,
    roles: []
  };
  private _user: IProfile = this._emptyuser;
  private _usercollection: AngularFirestoreCollection<IUserData> = this.afs.collection('/TEF-UK/users/user-list');


  constructor (public afAuth: AngularFireAuth, private afs: AngularFirestore, private router: Router) {

    this._isAuth$ = new BehaviorSubject(false);

    this.afAuth.authState.subscribe(async (auth) => {
      if (auth != null) {
        this._usercollection.doc(auth.email).valueChanges().subscribe(
          (data: IUserData) => {
            this._user.active = data.active;
            this._user.roles = data.roles;
            this._user.admin = this.isAdmin();
          });
        this._user.email = auth.email;
        await this.updateUser(auth);
        this._isAuth$.next(true);
      } else {
        this._user = this._emptyuser;
        this.user$.next(this._user);
        this._isAdmin$.next(false);
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
    if (roles !== [] && this.isAuth()) {
      const isadmin = roles.some(role => role === 'admin') || roles.some(role => role === 'superuser');
      this._isAdmin$.next(isadmin);
      return isadmin;
    }
    return false;
  }

  isAdmin$(): Observable<boolean> {
    return this._isAdmin$.asObservable();
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


  async logout() {
    await this.afAuth.auth.signOut();
    this.router.navigate(['signin']);
  }

  private updateUser(userObj: User | any) {
    this._user.firebase = userObj;
    this._user.lastlogin = userObj.metadata.lastSignInTime;
    this._user.logintime = new Date();
    // this.getUserData(userObj.email);
    this.user$.next(this._user);
    this._isAdmin$.next(this.isAdmin());
  }
}
