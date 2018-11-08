import { Component, OnInit } from '@angular/core';
import { LinkModel } from '../_core/_models/models-kudos';

@Component({
  selector: 'app-trials',
  templateUrl: './trials.component.html',
  styleUrls: ['./trials.component.scss']
})
export class TrialsComponent implements OnInit {

  trialsLinks: LinkModel[] = [
    {
      route:  'dashboard',
      label: 'Dashboard',
      icon: 'dashboard'
    },
    {
      route:  'active',
      label: 'Active',
      icon: 'timer'
    },
    {
      route:  'new',
      label: 'New',
      icon: 'add'
    },
    {
      route:  'completed',
      label: 'Completed',
      icon: 'outlined_flag'
    },
  ];

    constructor() {

  }

  ngOnInit() {
  }

}
