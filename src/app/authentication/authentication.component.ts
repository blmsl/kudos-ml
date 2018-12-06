import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit, OnDestroy {

  destroy$: Subject<boolean> = new Subject<boolean>();

  formValid = true;
  emailValid = false;
  passValid = false;
  hideLoader = true;

  usernameControl = new FormControl();
  passwordControl = new FormControl();

  loginFormControl = new FormGroup({
    usernameControl: this.usernameControl,
    passwordControl: this.passwordControl,
  });


  constructor () { }

  ngOnInit() {

    this.loginFormControl.valueChanges
      .pipe(
        takeUntil(this.destroy$),
      )
      .subscribe(form => console.log(form));
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }


  doLogin() {

    this.hideLoader = false;

  }

}
