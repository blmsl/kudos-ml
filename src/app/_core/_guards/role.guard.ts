import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  constructor (private router: Router, private auth: AuthService) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.checkLogin(state.url);
  }

  checkLogin(url: string): boolean {

    if (this.auth.isAuth() && this.auth.isAdmin()) { return true; }


    if (this.auth.isAuth() && !this.auth.isAdmin()) {
      console.error('not authorised');
      this.router.navigate(['/page-not-found']);
      return false;
    }

    if (this.auth.isAuth()) {
      this.router.navigate(['/signin']);
      return false;
    }

  }
}
