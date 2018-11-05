import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-menu',
  templateUrl: './admin-menu.component.html',
  styleUrls: ['./admin-menu.component.scss']
})
export class AdminMenuComponent implements OnInit {

  adminLinks = [
    {
      link: 'dashboard',
      label: 'Admin Dashboard',
      icon: ''
    },
    {
      link: 'data-manager',
      label: 'Data Management',
      icon: ''
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
