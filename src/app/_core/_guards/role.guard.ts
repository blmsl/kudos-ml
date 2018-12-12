import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  private destroy$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  private _isAdmin: boolean;

  constructor (private router: Router, private auth: AuthService) {

    this.auth.user$.pipe(takeUntil(this.destroy$)).subscribe(user => this._isAdmin = user.isAdmin);

  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.checkLogin(state.url);
  }

  checkLogin(url: string): boolean {

    const isAuth = this.auth.isAuth$.getValue() ? true : false;
    const isAdmin = this.auth.user$.getValue().isAdmin;
    console.log(`Auth State: ${isAuth}`, `Admin State: ${isAdmin}`);
    // console.warn('CHANGE ADMIN ROLE GUARD');

    if (isAuth && isAdmin) { return true; }

    this.router.navigate(['/signin']);
    return false;

  }
}
