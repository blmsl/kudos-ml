import { Component, OnInit } from '@angular/core';
import { LinkModel } from '../_core/_models/models-kudos';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  adminLinks: LinkModel[] = [
    {
      route: 'dashboard',
      label: 'Admin Dashboard',
      icon: ''
    },
    {
      route: 'data-manager',
      label: 'Data Management',
      icon: ''
    },
    {
      route: 'workstreams-manager',
      label: 'Workstream Management',
      icon: ''
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
