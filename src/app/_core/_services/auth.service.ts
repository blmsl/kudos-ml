import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable, BehaviorSubject } from 'rxjs';
// import { map, tap } from 'rxjs/operators';
import { User } from 'firebase';


interface IUserProfile {
  id?: string;
  active: boolean;
  admin: boolean;
  email: string;
  logintime: Date;
  lastlogin: string;
  firebase: User;
  roles: string[];
}

interface IUserData {
  id?: string;
  active: boolean;
  roles: string[];
}


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  redirectUrl: string;

  private _user: IUserProfile;

  private _authstate$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  private _adminstate$: BehaviorSubject<boolean> = new BehaviorSubject(undefined);
  // private _user$: BehaviorSubject<IUserProfile> = new BehaviorSubject(undefined);

  private _usercollection: AngularFirestoreCollection<IUserData> = this.afs.collection('/TEF-UK/users/user-list');

  private _emptyuser: IUserProfile = {
    active: null,
    admin: null,
    email: null,
    logintime: null,
    lastlogin: null,
    firebase: null,
    roles: []
  };



  constructor (private afAuth: AngularFireAuth, private afs: AngularFirestore, private router: Router) {

    this._user = this._emptyuser;

    this.afAuth.authState.subscribe((auth: User) => {
      if (auth != null) {
        this.loadUserProfile(auth);
      } else {
        this._authstate$.next(false);
      }
    });

  }

  private loadUserProfile(fb: User) {
    this.getUserData(fb.email).subscribe(
      (userinfo) => {
        if (!userinfo.active) {
          this.logout();
        }
        this._user.active = userinfo.active;
        this._user.roles = userinfo.roles;
        this._user.admin = this.checkIsAdmin(userinfo.roles);
        this._user.logintime = new Date();
        this._user.lastlogin = fb.metadata.lastSignInTime;
        this._user.firebase = fb;
        this._authstate$.next(true);
      },
      (err) => {
        console.error('Failed to load user profile', err);
        this._user = this._emptyuser;
        this._authstate$.next(false);
      }
    );
  }


  isAuth$(): Observable<boolean> {
    return this._authstate$.asObservable();
  }

  isAuth(): boolean {
    return this._authstate$.getValue();
  }

  isAdmin$(): Observable<boolean> {
    return this._adminstate$.asObservable();
  }

  isAdmin(): boolean {
    return this._adminstate$.getValue();
  }


  private getUserData(emailid: string): Observable<any> {
    return this._usercollection.doc<IUserData>(emailid).valueChanges();
  }


  private checkIsAdmin(roles: string[]): boolean {
    if (roles.length > 0) {
      const isadmin = roles.some(role => role === 'admin') || roles.some(role => role === 'superuser');
      this._adminstate$.next(isadmin);
      return isadmin;
    } else {
      this._adminstate$.next(false);
      return false;
    }

  }


  createUser(email: string, key: string, userdata: IUserProfile) {
    console.error('TODO - CREATE NEW USER');
    // this.afAuth.auth.createUserWithEmailAndPassword(email, key);
  }


  updateUser(email: string, changes: IUserProfile) {
    console.error('TODO - UPDATE USER');
    // this.afAuth.auth.createUserWithEmailAndPassword(email, key);
  }


  changePassword(email: string, newkey: string) {
    console.error('TODO - CHANGE PASSWORD');
  }


  login({ email, password }): Promise<void> {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(email, password)
        .then(() => {
          resolve();
        })
        .catch((err) => {
          console.error(err);
          reject();
        });
    });
  }


  async logout() {
    await this.afAuth.auth.signOut();
    this.router.navigate(['signin']);
  }


}
