import { Component, OnInit } from '@angular/core';
import { ExplorerListService } from '../_core/_services/explorer-list.service';
import { LinkModel } from '../_core/_models/models-kudos';





@Component({
  selector: 'app-network-explorer',
  templateUrl: './network-explorer.component.html',
  styleUrls: ['./network-explorer.component.scss']
})
export class NetworkExplorerComponent implements OnInit {



  explorerLinks: LinkModel[] = [
    {
      route: 'map',
      label: 'Map View',
      icon: 'satellite'
    },
    {
      route: 'table',
      label: 'Table View',
      icon: 'table_chart'
    }
  ];


  modes = ['sites', 'sectors', 'antennas', 'cells'];

  showSelection = true;

  constructor (private els: ExplorerListService) { }

  ngOnInit() { }

}
