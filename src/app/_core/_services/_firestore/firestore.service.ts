import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from 'firebase';
import { BaseService } from './BaseService';
import { BehaviorSubject } from 'rxjs';


interface UserProfile {
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
  id: string;
  active: boolean;
  roles: string[];
}


@Injectable({
  providedIn: 'root'
})
export class FireStoreService extends BaseService<UserProfile> {
  constructor (afs: AngularFirestore) {
    const path = '';
    super(path, afs);
  }
}


// redirectUrl: string;
// user$: BehaviorSubject<UserProfile> = new BehaviorSubject(undefined);
