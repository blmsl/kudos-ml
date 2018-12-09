import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../../_services/auth.service';
import { LinkModel } from '../../_models/models-kudos';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  @Output() closeSidenav = new EventEmitter<void>();

  links: LinkModel[];


  constructor (public auth: AuthService) {

    this.links = [
      {
        route: '/dashboard',
        label: 'Dashboard',
        icon: 'dashboard'
      },
      {
        route: '/explorer',
        label: 'Network Explorer',
        icon: 'settings_input_antenna'
      },
      {
        route: '/optimisation',
        label: 'Optimisation ML',
        icon: 'signal_cellular_alt'
      },
      {
        route: '/trials',
        label: 'Trials',
        icon: 'whatshot'
      },
      {
        route: '/workstreams',
        label: 'Workstreams',
        icon: 'assignment'
      },
      {
        route: '/testing',
        label: 'Testing',
        icon: 'code'
      },
      // {
      //   route: '/admin',
      //   label: 'Admin',
      //   icon: 'domain'
      // },
    ];
  }

  ngOnInit() { }


  onCloseSideNav() {
    this.closeSidenav.emit();
  }

}
