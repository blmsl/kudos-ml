import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormBuilder } from '@angular/forms';
import { AuthService } from '../_core/_services/auth.service';
import { Subject } from 'rxjs';
import { cred } from '../../environments/kudos-config';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit, OnDestroy {

  destroy$: Subject<boolean> = new Subject<boolean>();

  hideLoader: boolean;
  hideError: boolean;
  errMsg: string;

  loginForm = this.fb.group({
    email: [cred.email, [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    // password: [cred.key, [Validators.required, Validators.minLength(6)]],
  });


  constructor (private fb: FormBuilder, private router: Router, private auth: AuthService) {
  }


  ngOnInit() {
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
        this.hideLoader = true;
        this.loginForm.patchValue({ password: '' });
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
