import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil, debounceTime, distinctUntilChanged } from 'rxjs/operators';

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

    this.usernameControl.valueChanges
    .pipe(
      takeUntil(this.destroy$),
      debounceTime(200),
      distinctUntilChanged())
    .subscribe(uname => console.log(uname));

    this.passwordControl.valueChanges
    .pipe(
      takeUntil(this.destroy$),
      debounceTime(200),
      distinctUntilChanged())
    .subscribe(pass => console.log(pass));

    this.loginFormControl.valueChanges
      .pipe(
        takeUntil(this.destroy$),
        debounceTime(200),
        distinctUntilChanged())
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
