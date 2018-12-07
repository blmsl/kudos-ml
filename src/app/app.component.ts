import { Component, OnDestroy } from '@angular/core';
import { AuthService } from './_core/_services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {

  title = 'kudos-app';

  constructor(private auth: AuthService) {

    // DISABLE THIS
    // console.log('Auto Auth');
    // this.kAuth.login();

  }

  ngOnDestroy() {
    this.auth.logout();
  }

  onDeactivate() {
    // Router Deactivate
  }

}
