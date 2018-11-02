import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LinkModel } from '../models/models-kudos';

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
        url: '/topology',
        label: 'Network Topology',
        icon: 'settings_input_antenna'
      },
      {
        url: '/optimisation',
        label: 'Optimisation ML',
        icon: 'signal_cellular_alt'
      },
      {
        url: '/trials',
        label: 'Trials',
        icon: 'whatshot'
      }
    ];
  }

  ngOnInit() {
  }

  onCloseSideNav() {
    this.closeSidenav.emit();
  }

}
