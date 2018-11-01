import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LinkModel } from '../models/models-kudos';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  private links: LinkModel[];

  @Output() closeSidenav = new EventEmitter<void>();


  constructor() {

    this.links = [
      {
        url: '/dashboard',
        label: 'Dashboard'
      },
      {
        url: '/topology',
        label: 'Network Topology'
      },
      {
        url: 'optimisation-ml',
        label: 'Optimisation ML'
      },
      {
        url: '/trials',
        label: 'Trials'
      }
    ];
  }

  ngOnInit() {
  }

  onCloseSideNav() {
    this.closeSidenav.emit();
  }

}
