import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'kudos-app';

  constructor() {

    // DISABLE THIS
    // console.log('Auto Auth');
    // this.kAuth.login();

  }

  onDeactivate() {
    // Router Deactivate
  }

}
