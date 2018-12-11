import { Component, OnDestroy } from '@angular/core';
import { AuthService, AppUser } from './_core/_services/auth.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {

  title = 'kudos-app';
  private appAuth: Observable<AppUser>;
  private destroy$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  private user: AppUser;

  constructor (private auth: AuthService) {

    this.appAuth = this.auth.user$;

    this.appAuth
      .pipe(takeUntil(this.destroy$))
      .subscribe(user => console.log('App User$', this.user = user));

  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.auth.logout();
  }

  onDeactivate() {
    // Router Deactivate
  }

}
