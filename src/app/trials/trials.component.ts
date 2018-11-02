import { Component, OnInit } from '@angular/core';
import { LinkModel } from '../_core/_shared/models/models-kudos';

@Component({
  selector: 'app-trials',
  templateUrl: './trials.component.html',
  styleUrls: ['./trials.component.scss']
})
export class TrialsComponent implements OnInit {

  links: LinkModel[];

    constructor() {

      const baseref = '/trials/';

      this.links = [
        {
          url: baseref + 'dashboard',
          label: 'Dashboard',
          icon: 'dashboard'
        },
        {
          url: baseref + 'active',
          label: 'Active',
          icon: 'timer'
        },
        {
          url: baseref + 'new',
          label: 'New',
          icon: 'add'
        },
        {
          url: baseref + 'completed',
          label: 'Completed',
          icon: 'outlined_flag'
        },
      ];
  }

  ngOnInit() {
  }

}
