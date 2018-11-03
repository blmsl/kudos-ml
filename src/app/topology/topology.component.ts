import { Component, OnInit } from '@angular/core';

import { SiteModel } from '../_core/_models/models-site';

@Component( {
  selector: 'app-topology',
  templateUrl: './topology.component.html',
  styleUrls: ['./topology.component.scss']
} )
export class TopologyComponent implements OnInit {

  SITE_TREE: SiteModel[];

  constructor() {  }

  ngOnInit() {
  }

}
