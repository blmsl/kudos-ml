import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  constructor (private router: Router, private authService: AuthService) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.checkLogin(state.url);
  }

  checkLogin(url: string): boolean {
    if (this.authService.isAuth() && this.authService.isAdmin()) { return true; }

    // Store the attempted URL for redirecting
    // this.authService.redirectUrl = url;

    if (this.authService.isAuth()) {
      this.router.navigate(['/signin']);
      return false;
    }

    // Navigate to the login page with extras
    console.error('not authorised');
    this.router.navigate(['/page-not-found']);
    return false;
  }
}
