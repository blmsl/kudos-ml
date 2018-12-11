import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../../_services/auth.service';
import { Subject } from 'rxjs';

import { cred } from '../../../../environments/kudos-config';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit, OnDestroy {

  hideLoader: boolean;
  hideError: boolean;
  errMsg: string;
  loginForm: FormGroup;
  destroy$: Subject<boolean> = new Subject<boolean>();


  constructor (private fb: FormBuilder, private router: Router, private auth: AuthService) {

    this.loginForm = this.fb.group({
      'email': [{ value: cred.email, disabled: true }, [Validators.required, Validators.email]],
      'password': [{ value: cred.key, disabled: true }, [Validators.required, Validators.minLength(6)]],
    });

    // Wait for authentication state
    this.auth.authPending$
      .pipe(takeUntil(this.destroy$))
      .subscribe(pending => {
        if (pending) {
          this.loginForm.get('email').disable();
          this.loginForm.get('password').disable();
        } else {
          this.loginForm.get('email').enable();
          this.loginForm.get('password').enable();
        }
      });
  }


  ngOnInit() {

    let url = this.auth.redirectUrl;
    if (url === '/signin' || url === undefined) { url = '/dashboard'; }

    // If already logged in, redirect
    this.auth.isAuth$
      .pipe(takeUntil(this.destroy$))
      .subscribe(state => {
        if (state) { this.router.navigate([url]); }
      });

    console.warn('Remove Auto Cred');
    this.hideLoader = true;
    this.hideError = true;
    this.errMsg = '';
  }


  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }


  onSubmit() {
    this.hideLoader = false;
    this.auth.login(this.loginForm.value)
      .then(() => {
        let url: string;
        if (this.auth.redirectUrl) {
          url = this.auth.redirectUrl;
        } else {
          url = '/dashboard';
        }
        this.router.navigate([url]);
      })
      .catch(() => {
        this.hideLoader = true;
        this.errMsg = 'The email or password is incorrect';
        this.hideError = false;
        this.loginForm.patchValue({ password: '' });
        setTimeout(() => {
          this.errMsg = '';
          this.hideError = true;
        }, 10000);
      });
  }


}
