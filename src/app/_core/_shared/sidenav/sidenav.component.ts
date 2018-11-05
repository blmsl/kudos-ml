import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LinkModel } from '../../_models/models-kudos';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  links: LinkModel[];

  @Output() closeSidenav = new EventEmitter<void>();


  constructor() {

    this.links = [
      {
        url: '/dashboard',
        label: 'Dashboard',
        icon: 'dashboard'
      },
      {
        url: '/explorer',
        label: 'Network Explorer',
        icon: 'settings_input_antenna'
      },
      // {
      //   url: '/topology',
      //   label: 'Network Topology',
      //   icon: 'settings_input_antenna'
      // },
      {
        url: '/optimisation',
        label: 'Optimisation ML',
        icon: 'signal_cellular_alt'
      },
      {
        url: '/trials',
        label: 'Trials',
        icon: 'whatshot'
      },
      {
        url: '/admin',
        label: 'Admin',
        icon: 'domain'
      },
    ];
  }

  ngOnInit() {
  }

  onCloseSideNav() {
    this.closeSidenav.emit();
  }

}
