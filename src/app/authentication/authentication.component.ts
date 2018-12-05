import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {

  formValid = false;
  emailValid = false;
  passValid = false;
  usernameControl = new FormControl();
  passwordControl = new FormControl();


  constructor () { }

  ngOnInit() {


  }

}
