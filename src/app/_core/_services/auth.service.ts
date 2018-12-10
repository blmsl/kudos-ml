import { Injectable, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { User } from 'firebase';


interface IUserProfile {
  id?: string;
  active: boolean;
  admin: boolean;
  email: string;
  displayname: string;
  firebase: User;
  lastlogin: string;
  logintime: Date;
  roles: string[];
  superuser: boolean;
  uid?: string;
}

interface IUserData {
  id?: string;
  active: boolean;
  roles: string[];
}


@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnDestroy {

  redirectUrl: string;

  private _user: IUserProfile;

  private _authstate$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  private _adminstate$: BehaviorSubject<boolean> = new BehaviorSubject(undefined);
  private _superstate$: BehaviorSubject<boolean> = new BehaviorSubject(undefined);
  private _userInfo$: BehaviorSubject<IUserProfile> = new BehaviorSubject(undefined);

  private _usercollection: AngularFirestoreCollection<IUserData> = this.afs.collection('/TEF-UK/users/user-list');

  private _emptyuser: IUserProfile = {
    id: null,
    active: null,
    admin: null,
    displayname: null,
    email: null,
    firebase: null,
    logintime: null,
    lastlogin: null,
    roles: [],
    superuser: null,
    uid: null,
  };



  constructor (private afAuth: AngularFireAuth, private afs: AngularFirestore, private router: Router) {

    this.afAuth.authState.subscribe((auth: User) => {
      if (auth != null) {
        this.loadUserProfile(auth);
        this._authstate$.next(true);
      } else {
        this._userInfo$.next(undefined);
        this._adminstate$.next(false);
        this._superstate$.next(false);
        this._authstate$.next(false);
      }
    });

  }

  ngOnDestroy() {
    console.warn('Auth Service Destroyed');
  }

  private loadUserProfile(fbUser: User) {
    this.getUserData(fbUser.email).subscribe(
      (userinfo) => {
        if (!userinfo.active) {
          this.logout();
        }
        const admin = this.checkIsAdmin(userinfo.roles);
        const superuser = this.checkIsSuperUser(userinfo.roles);
        this._user = {
          uid: fbUser.uid,
          email: fbUser.email,
          active: userinfo.active,
          admin,
          superuser,
          displayname: fbUser.displayName,
          lastlogin: fbUser.metadata.lastSignInTime,
          firebase: fbUser,
          logintime: new Date(),
          roles: userinfo.roles,
        };
        console.log(this._user);
        this._userInfo$.next(this._user);
      },
      (err) => {
        console.error('Failed to load user profile', err);
        this._user = this._emptyuser;
        this._userInfo$.next(undefined);
        this._authstate$.next(false);
      }
    );
  }


  userInfo$(): Observable<IUserProfile> {
    return this._userInfo$.asObservable();
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

  isSuperuser$(): Observable<boolean> {
    return this._superstate$.asObservable();
  }

  isSuperuser(): boolean {
    return this._superstate$.getValue();
  }


  private getUserData(emailid: string): Observable<any> {
    return this._usercollection.doc<IUserData>(emailid).valueChanges();
  }


  private checkIsAdmin(roles: string[]): boolean {
    if (roles.length > 0) {
      const isadmin = roles.some(role => role === 'admin');
      this._adminstate$.next(isadmin);
      return isadmin;
    } else {
      this._adminstate$.next(false);
      return false;
    }

  }


  private checkIsSuperUser(roles: string[]): boolean {
    if (roles.length > 0) {
      const issuper = roles.some(role => role === 'superuser');
      this._adminstate$.next(issuper);
      this._superstate$.next(issuper);
      return issuper;
    } else {
      this._adminstate$.next(false);
      this._superstate$.next(false);
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
