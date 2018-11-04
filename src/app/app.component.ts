import { Component } from '@angular/core';
import { KudosAuthService } from './_core/_services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'kudos-app';

  constructor(private kAuth: KudosAuthService) {

    // DISABLE THIS
    // console.log('Auto Auth');
    // this.kAuth.login();

  }

  onDeactivate() {
    // Router Deactivate
  }

}
