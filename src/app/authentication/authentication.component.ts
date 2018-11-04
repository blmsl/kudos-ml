import { Component, OnInit } from '@angular/core';

import { KudosAuthService } from '../_core/_services/auth.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {

  constructor(private as: KudosAuthService) { }

  ngOnInit() {
  }

}
