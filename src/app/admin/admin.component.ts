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
      icon: 'domain'
    },
    {
      route: 'data-manager',
      label: 'Data Management',
      icon: 'settings_input_antenna'
    },
    {
      route: 'users',
      label: 'Users',
      icon: 'assignment_ind'
    },
    {
      route: 'workstreams-manager',
      label: 'Workstreams',
      icon: 'assignment'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
