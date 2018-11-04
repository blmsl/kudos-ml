import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { KudosAuthService } from '../../_services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() sidenavToggle = new EventEmitter<void>();

  authState: Boolean;

  constructor(private kAuth: KudosAuthService) {

    this.kAuth.authState$.subscribe(state => {
      console.log('BOOL AUTH STATE', state);
      this.authState = state;
     });

  }

  ngOnInit() {
  }

  onToggleSideNav() {
    this.sidenavToggle.emit();
  }

  doSignin() {
    console.log('Header SignIn');
    this.kAuth.login();
  }

  doSignout() {
    console.log('Header SignOut');
    this.kAuth.logout();
  }

}
