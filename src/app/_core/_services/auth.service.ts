import { Injectable, OnDestroy } from '@angular/core';
import { Router, ResolveEnd } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable, BehaviorSubject, of, iif } from 'rxjs';
import { switchMap, concatMap, mergeMap, tap, map, distinctUntilChanged, defaultIfEmpty } from 'rxjs/operators';
import { User } from 'firebase';


interface IUserData {
  id?: string;
  active: boolean;
  roles: string[];
}

export class AppUser {

  uid: string;
  active: boolean;
  email: string;
  displayname: string;
  logintime: Date = new Date;
  roles: string[];
  firebase: User;
  isAdmin(): boolean { if (this.roles.length > 0) { this.roles.some(role => role === 'admin'); } else { return false; } }
  isAdmin$(): Observable<boolean> { if (this.roles.length > 0) { return of(this.roles.some(role => role === 'admin')); } else { return of(false); } }
  isSuperUser(): boolean { if (this.roles.length > 0) { this.roles.some(role => role === 'superuser'); } else { return false; } }
  isSuperUser$(): Observable<boolean> { if (this.roles.length > 0) { return of(this.roles.some(role => role === 'superuser')); } else { return of(false); } }

  constructor (auth: User, userinfo: IUserData) {
    this.uid = auth.uid;
    this.active = userinfo.active;
    this.email = auth.email;
    this.displayname = auth.displayName;
    this.roles = userinfo.roles;
    this.firebase = auth;
  }

}


@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnDestroy {

  redirectUrl: string;

  authPending$: BehaviorSubject<boolean> = new BehaviorSubject(true);
  isAuth$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  user$: BehaviorSubject<AppUser>;

  private _user: AppUser;
  private _usercollection: AngularFirestoreCollection<IUserData> = this.afs.collection('/TEF-UK/users/user-list');


  constructor (private afAuth: AngularFireAuth, private afs: AngularFirestore, private router: Router) {
    // Observe AuthState and if auth'd create user object
    this.afAuth.authState.pipe(
      distinctUntilChanged(),
      switchMap(fire => { if (fire != null) { return this.getUserData$(fire.email); } else { return of(null); } }, (firebase, user) => ({ firebase, user }))
    ).subscribe(state => {
      if (state.firebase != null) {
        this.authPending$.next(false);
        this._user = new AppUser(state.firebase, state.user);
        this.user$ = new BehaviorSubject(this._user);
        this.isAuth$.next(true);
      } else {
        this.authPending$.next(false);
        this._user = undefined;
        this.isAuth$.next(false);
      }
    });
  }

  ngOnDestroy() {
    console.warn('Auth Service Destroyed');
  }


  updateDisplayName(name: string) {
    const displayname = name;
    // this.afAuth.auth.updateCurrentUser();
  }


  private getUserData$(emailid: string): Observable<any> {
    return this._usercollection.doc<IUserData>(emailid).valueChanges();
  }


  createUser(email: string, key: string, userdata: AppUser) {
    console.error('TODO - CREATE NEW USER');
    // this.afAuth.auth.createUserWithEmailAndPassword(email, key);
  }


  updateUser(email: string, changes: AppUser) {
    console.error('TODO - UPDATE USER');
    // this.afAuth.auth.createUserWithEmailAndPassword(email, key);
  }


  changePassword(email: string, newkey: string) {
    console.error('TODO - CHANGE PASSWORD');
  }


  login({ email, password }): Promise<void> {
    this.authPending$.next(true);
    return new Promise((resolve, reject) => {
      if (this.isAuth$.getValue()) {
        // Already signed in
        resolve();
      } else {
        // Need to sign in
        this.afAuth.auth.signInWithEmailAndPassword(email, password)
          .then(() => {
            resolve();
          })
          .catch((err) => {
            console.error(err);
            this.authPending$.next(false);
            this._user = undefined;
            reject();
          });
      }
    });
  }


  async logout() {
    await this.afAuth.auth.signOut();
    this.router.navigate(['signin']);
  }


}
